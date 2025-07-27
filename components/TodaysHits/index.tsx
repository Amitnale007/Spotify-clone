import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'

const BiggestCard = ({ title, imageUri }: { title: string, imageUri: string }) => {
    return (
        <View className='flex my-2 w-[180px]'>
            <Image style={{ height: 180 }} source={{ uri: imageUri }} />
            <Text className='text-gray-500 my-2 text-wrap'>{title}</Text>
        </View>
    );
}

const TodaysHits = ({ title }: { title: string }) => {
    const biggesthits = [
        { title: "Lady gaga,sabrina,carpenter,Eulon Musk", imageUri: "https://m.media-amazon.com/images/M/MV5BY2EzN2UxMDItZTk2NC00NDcwLTliYjktNWI4ZWJjZTQ1ZTg2XkEyXkFqcGc@.jpg" },
        { title: "Lady gaga,sabrina,carpenter,Eulon Musk", imageUri: "https://wallpapercave.com/wp/wp8807389.jpg" },
        { title: "Lady gaga,sabrina,carpenter,Eulon Musk", imageUri: "https://wallpapercave.com/wp/wp8807427.jpg" },
        { title: "Lady gaga,sabrina,carpenter,Eulon Musk", imageUri: "https://i.pinimg.com/originals/f5/83/dc/f583dc56e5f5704f094dcdbb9d70537e.jpg" },
        { title: "Lady gaga,sabrina,carpenter,Eulon Musk", imageUri: "https://media5.bollywoodhungama.in/wp-content/uploads/2025/07/KD-The-Devil-255x383.jpg" },
        { title: "Lady gaga,sabrina,carpenter,Eulon Musk", imageUri: "https://wallpapercave.com/wp/wp4253014.jpg" },
    ]
    const shuffledHits = [...biggesthits].sort(() => Math.random() - 0.5);
    return (
        <View className='my-2'>
            <Text className='text-white font-bold text-3xl'>{title}</Text>
            <FlatList
                data={shuffledHits}
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

export default TodaysHits