import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'

const BiggestCard = ({ title, imageUri }: { title: string, imageUri: string }) => {
    return (
        <View className='flex my-2 w-[180px]'>
            <Image style={{ height: 180,borderRadius:90 }} source={{ uri: imageUri }} />
            <Text className='text-white my-2 text-center font-semibold'>{title}</Text>
        </View>
    );
}

const PopularArtist = () => {
const popularArtists = [
  {
    title: "Arijit Singh",
    imageUri: "https://c.saavncdn.com/artists/Arijit_Singh_004_20241118063717_500x500.jpg",
  },
  {
    title: "Taylor Swift",
    imageUri: "https://i.pinimg.com/originals/b7/69/0f/b7690f465e1c955c667eb0abc7d00c0f.jpg",
  },
  {
    title: "Armaan Malik",
    imageUri: "https://i.pinimg.com/originals/9d/fc/41/9dfc4172a12933e2dbc8d8697e6996fd.jpg",
  },
  {
    title: "Billie Eilish",
    imageUri: "https://i.pinimg.com/originals/58/cd/43/58cd435b919ec9ed5202bf1691f17f87.jpg",
  },
  {
    title: "Diljit Dosanjh",
    imageUri: "https://i.pinimg.com/originals/8f/50/d1/8f50d1267f240d9e4d1a66752a573e9f.jpg",
  },
  {
    title: "Shreya Ghoshal",
    imageUri: "https://i.pinimg.com/originals/81/17/b7/8117b744290e3364aba2dc319382f1da.jpg",
  },
  {
    title: "KK",
    imageUri: "https://i.pinimg.com/originals/32/bd/cb/32bdcbea81b2c68c27d8ebff6d66a617.jpg",
  },
  {
    title: "Dua Lipa",
    imageUri: "https://i.pinimg.com/originals/bc/8f/ce/bc8fceb859c148eeea65854188a1311b.jpg",
  }, 
];

    // const shuffledHits = [...biggesthits].sort(() => Math.random() - 0.5);
    return (
        <View className='my-2'>
            <Text className='text-white font-bold text-3xl'>Popular Artist</Text>
            <FlatList
                data={popularArtists}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <BiggestCard title={item.title} imageUri={item.imageUri} />
                )}
                ItemSeparatorComponent={() => <View className="w-3" />}
            />

        </View>
    )
}

export default PopularArtist