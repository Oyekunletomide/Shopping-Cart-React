import React from 'react'

type Props = {
    name?: string;
}
const Footer: React.FC<Props> = ({name}) => (

    <div className="h-20 bg-black text-white flex items-center justify-center mt-4">
        Copyright
    </div>

)

export default Footer