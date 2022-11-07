import moment, { Moment } from 'moment'
import { apiFaticon } from "../api/config"
import { Datum, IconResponseFaticon } from '../interfaces/interfaces'
import TokenFaticon from "../models/TokenFaticon"

export const getTokenFaticon = async (newRequest?: string) => {
  try {
    const body = { apikey: process.env.API_FATICON }
    const resp = await apiFaticon.post('app/authentication', body)
    const { token, expires } = resp.data.data
    const created = moment()
    await saveToken(token, expires, created, newRequest)
  } catch (error) {
    console.log(error)
  }
}

const saveToken = async (token: string, expires: number, created: Moment, newRequest?: string) => {
  const validateTokenExists = await TokenFaticon.find({})
  if (validateTokenExists.length > 0) {
    const { _id } = validateTokenExists[0]
    await TokenFaticon.findByIdAndUpdate(_id, { token, expires, created })
  }
  if (!newRequest) {
    const newToken = new TokenFaticon({ token, expires, created })
    await newToken.save()
    return
  }
  await getIconFaticon(newRequest)
}

export const getIconFaticon = async (icon: string) => {
  try {
    console.log(icon)
    const respToken = await TokenFaticon.find({})
    if (respToken.length === 0 || !respToken) await getTokenFaticon()
    const { token, created } = respToken[0]
    const fechaActual = moment()
    const diferenciaHoras = moment(created).diff(fechaActual, "hours");
    if (diferenciaHoras <= -1) await getTokenFaticon(icon)
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    const resp = await apiFaticon.get<IconResponseFaticon>(`search/icons?q=${icon}`, {
      headers
    })
    const dataResponse = getIcons(resp.data)
    return dataResponse
  } catch (error) {
    console.log(error)
  }
}

const getIcons = (dataIcons: IconResponseFaticon) => {
  if (!dataIcons) return ''
  const pack = 'Optical Character Recognition'
  const { data } = dataIcons
  let newData: string | undefined = undefined
  data.forEach((item: Datum) => {
    const { pack_name, images } = item
    if (pack_name === pack) {
      newData = images['512']
      return
    }
  })
  if (!newData) newData = data[0].images['512']
  return newData
}