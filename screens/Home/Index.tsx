import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from 'components/Header/Index'
import UserPlayList from 'components/UserPlaylist'
import TodaysHits from 'components/TodaysHits'
import { Entypo, Ionicons } from '@expo/vector-icons'
import PopularArtist from 'components/PopularArtist'

const Home = () => {
  return (
    <SafeAreaView className='flex-1 bg-black p-4'>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserPlayList />
        <TodaysHits title='Todays biggest hits' />
        <PopularArtist />
        <TodaysHits title='Throwbacks' />
      </ScrollView>
      <View className='bg-gray-600 p-2 rounded-md'>
        <View className='flex-row items-center'>
          <Image
            style={{ height: 50, width: 50, borderRadius: 10 }}
            source={{
              uri: 'https://i.pinimg.com/originals/66/f0/40/66f040e358d2bb6cad8fb5840a717a18.jpg',
            }}
          />
          <View className='ml-4 flex-1'>
            <Text className='font-semibold text-lg text-white'>Takeaways</Text>
            <Text className='text-gray-300'>The Chainsmoker</Text>
          </View>
          <View className='flex-row ml-auto '>
            <Ionicons name='checkmark-circle-sharp' size={28} color='green' />
            <Entypo name='controller-play' size={28} color='white' className='mx-2' />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home