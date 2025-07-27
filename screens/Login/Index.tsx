import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo, Feather, Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation=useNavigation()
    const handleClick=()=>{
        navigation.navigate("Tab")
    }
    return (
        <View className='flex-1 justify-end pb-14 bg-black items-center'>
            <Entypo name="spotify" size={100} color="white" />
            <Text className='text-white text-5xl font-bold'>Login to Spotify</Text>
            <TouchableOpacity onPress={handleClick} className='bg-green-500 w-[90%] mt-32 rounded-full items-center p-4 pl-6 flex-row'>
                <Fontisto name="email" size={30} color="black" />
                <Text className='font-semibold text-xl ml-4'>
                    Login With Email
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick} className=' w-[90%] my-2 border border-gray-300 rounded-full items-center p-4 pl-6 flex-row'>
                <Feather name="smartphone" size={30} color="white" />
                <Text className='font-semibold text-white text-xl ml-4'>
                    Continue with phone number
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick} className=' w-[90%] my-2 border border-gray-300 rounded-full items-center p-4 pl-6 flex-row'>
                <Image source={require("../../assets/appAssets/google.png")} style={{height:30,width:30}}/>
                <Text className='font-semibold text-white text-xl ml-4'>
                    Continue with Google
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick} className=' w-[90%] my-2 border border-gray-300 rounded-full items-center p-4 pl-6 flex-row'>
                <Image source={require("../../assets/appAssets/facebook.png")} style={{height:30,width:30}}/>
                <Text className='font-semibold text-white text-xl ml-4'>
                    Continue with Facebook
                </Text>
            </TouchableOpacity>
            <View className='mt-20'>
                <Text className='text-white text-center text-xl'>Dont have account?</Text>
                <Text className='text-white font-semibold text-center text-xl mt-4'>Sign Up</Text>
            </View>
 
        </View>
    )
}

export default Login