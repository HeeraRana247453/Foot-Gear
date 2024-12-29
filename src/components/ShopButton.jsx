
const ShopButton = ({label, iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-8 py-4 font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : `bg-gradient-to-r from-emerald-500 to-green-400 text-white border-none`} rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${fullWidth && `w-full`}`}>
      {label}
      {iconURL && (<img src={iconURL} alt="arrow-right-icon" className="ml-2 rounded-full w-6 h-6" /> )}
    </button>
  )
}

export default ShopButton