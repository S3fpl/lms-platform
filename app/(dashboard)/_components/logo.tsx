import Image from 'next/image'

const Logo = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <div className={`${!isExpanded ? 'my-2 p-2 hover:bg-white/10 rounded-sm cursor-pointer transition-all duration-300' : ''}`}>
      <Image
        height={isExpanded ? 156 : 40}
        width={isExpanded ? 156 : 40}
        alt="logo"
        src={isExpanded ? "/logo/logoW.png" : "/logo/logoMini.png"}
        className="transition-all duration-300 "
      />
    </div>
  )
}

export default Logo
