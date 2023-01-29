import React from 'react'
import Icons from '../../assets/Icons'

const Type1 = () => {
    return (
        <form>
            <div className="flex items-center py-2 px-3 bg-blue-gray-A10 rounded-[4px] focus-within:rounded-full">
                <img src={Icons.search} alt="" className="mr-2" />
                <input
                    type="text"
                    placeholder="Search with script ID, Title..."
                    className="bg-transparent text-small text-ct-blue-90-70% outline-none border-none w-52"
                />
            </div>
        </form>
    )
}

export default Type1