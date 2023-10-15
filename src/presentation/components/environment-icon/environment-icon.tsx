import React from 'react'
import { type IconType } from 'react-icons'
import { FaHouseChimney as HouseIcon } from 'react-icons/fa6'
import { RiHospitalFill as HospitalIcon } from 'react-icons/ri'

type PropsType = React.SVGAttributes<SVGElement> & {
  iconName: string
}

const icons: Record<string, IconType> = {
  house: HouseIcon,
  hospital: HospitalIcon
}

const EnvironmentIcon: React.FC<PropsType> = (props: PropsType) => {
  const { iconName, ...svgProps } = props

  const IconComponent = icons[props.iconName]

  if (IconComponent) {
    return <IconComponent {...svgProps} />
  }

  return icons.house({ ...svgProps })
}

export default EnvironmentIcon
