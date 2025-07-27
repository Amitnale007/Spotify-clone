import { View, Text, Image } from 'react-native'
import React from 'react'


const PlaylistCard = ({ title, imageUri }:{title:string,imageUri:string}) => {
  return (
    <View className="w-[48%] h-20 flex-row items-center bg-gray-700 rounded-lg overflow-hidden my-1">
      <Image
        source={{ uri: imageUri }}
        style={{
          height: '100%',
          width: 60,
          resizeMode: 'cover',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
      <Text className="pl-3 font-bold text-white flex-1">{title}</Text>
    </View>
  );
};

const UserPlayList = () => {
    return (
        <View className='flex-row justify-between w-full my-2 flex-wrap'>
            <PlaylistCard title='English' imageUri='https://i.pinimg.com/originals/66/f0/40/66f040e358d2bb6cad8fb5840a717a18.jpg'/>
            <PlaylistCard title='Liked Song' imageUri='https://i.pinimg.com/originals/18/e9/4d/18e94d393626d290db3d07d63ef76337.jpg'/>
            <PlaylistCard title='aakein teri' imageUri='https://i.pinimg.com/originals/47/34/ff/4734ff050c6a27290732edc0bf4c83e3.jpg'/>
            <PlaylistCard title='Thalapathy Vijay' imageUri='https://i.pinimg.com/originals/66/f0/40/66f040e358d2bb6cad8fb5840a717a18.jpg'/>
            <PlaylistCard title='All of 90s' imageUri='https://marketplace.canva.com/EADanhUPt2Y/1/0/1131w/canva-dark-couple-kiss-romance-movie-poster-portrait-9jbWlapRedI.jpg'/>
        </View>
    )
}

export default UserPlayList