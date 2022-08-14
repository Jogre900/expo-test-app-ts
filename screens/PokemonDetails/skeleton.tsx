import React from 'react'
import { Dimensions, ViewStyle, View } from 'react-native'
import SkeletonLoader from 'expo-skeleton-loader'

const { width, height } = Dimensions.get('window')

const barsStyles = {
  container: {
    flexDirection: 'row',
    width: width - 30,
    marginBottom: 20
  },
  avatarSke: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5
  },
  barsContainer: {
    height: 50,
    flex: 1
  },
  bar1: {
    width: '100%',
    height: 20,
    flex: 1,
    borderRadius: 5
  }
}

const BarsLayout = () => {
  return (
    <SkeletonLoader duration={500} highlightColor="#F2F8FC" boneColor="#ccc">
      <SkeletonLoader.Container style={barsStyles.container}>
        <SkeletonLoader.Item style={barsStyles.avatarSke} />
        <SkeletonLoader.Container style={barsStyles.barsContainer}>
          <SkeletonLoader.Item style={barsStyles.bar1} />
        </SkeletonLoader.Container>
      </SkeletonLoader.Container>
    </SkeletonLoader>
  )
}

const statsStyles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 20
  },
  itemContainer: {
    justifyContent: 'center'
  },
  item1: {
    width: 100,
    height: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  item2: {
    width: 100,
    height: 10,
    borderRadius: 5
  }
}

const StatsLayout = () => {
  return (
    <SkeletonLoader
      duration={500}
      highlightColor="#F2F8FC"
      boneColor="#ccc"
      style={statsStyles.container}
    >
      <SkeletonLoader.Container style={statsStyles.itemContainer}>
        <SkeletonLoader.Item style={statsStyles.item1} />
        <SkeletonLoader.Item style={statsStyles.item2} />
      </SkeletonLoader.Container>

      <SkeletonLoader.Container style={statsStyles.itemContainer}>
        <SkeletonLoader.Item style={statsStyles.item1} />
        <SkeletonLoader.Item style={statsStyles.item2} />
      </SkeletonLoader.Container>

      <SkeletonLoader.Container style={statsStyles.itemContainer}>
        <SkeletonLoader.Item style={statsStyles.item1} />
        <SkeletonLoader.Item style={statsStyles.item2} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  )
}

const avatarStyles = {
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    marginBottom: 30
  },
  name: {
    height: 30,
    width: 200,
    borderRadius: 5
  }
}

const AvatarLayout = () => {
  return (
    <SkeletonLoader duration={500} highlightColor="#f2f8fc" boneColor="#ccc">
      <SkeletonLoader.Container
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <SkeletonLoader.Item style={avatarStyles.avatar} />
        <SkeletonLoader.Item style={avatarStyles.name} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  )
}

const Skeleton = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <AvatarLayout />
      </View>
      <View
        style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <StatsLayout />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        {[1, 2, 3, 4].map((_, i) => (
          <BarsLayout key={i} />
        ))}
      </View>
    </View>
  )
}

export default Skeleton
