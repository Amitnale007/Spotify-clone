import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
    const topBar = [
        { title: "All", isActive: true },
        { title: "Music", isActive: false },
        { title: "Podcast", isActive: false },
    ]
    return (
        <View className='flex w-full h-10 my-2 bg-black flex-row items-center'>
            <View className='bg-red-500 rounded-full w-12 h-12 justify-center items-center'>
                <Text className='text-white'>S</Text>
            </View>

            {topBar.map((item, index) =>
                <View key={index} className={`${item.isActive?"bg-green-600 text-black":"bg-gray-700"} mx-2 justify-center rounded-full px-6 py-3`}>
                    <Text className={`${item.isActive?"text-black":"text-white"} font-semibold`}>{item.title}</Text>
                </View>
            )}
        </View>
    )
}

export default Header