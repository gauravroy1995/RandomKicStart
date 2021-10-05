import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  Alert,
  Image,
} from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import { useTranslation } from 'react-i18next'
import { UserState } from '@/Store/User'
import { ThemeState } from '@/Store/Theme'

const IndexExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const user = useSelector((state: { user: UserState }) => state.user.item)
  const fetchOneUserLoading = useSelector(
    (state: { user: UserState }) => state.user.fetchOne.loading,
  )
  const fetchOneUserError = useSelector(
    (state: { user: UserState }) => state.user.fetchOne.error,
  )

  const [userId, setUserId] = useState('1')

  const fetch = (id: string) => {
    setUserId(id)
    if (id) {
      dispatch(FetchOne.action(id))
    }
  }

  const changeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  const renderEachCard = () => {
    return (
      <View style={styles.eacas}>
        <View style={styles.flexSW}>
          <Text style={styles.textSTy}>Simpl</Text>
          <View style={styles.bilasd}>
            <Text style={styles.inade}>BILL OVERDUE</Text>
          </View>
        </View>
        <View style={styles.flexSW23}>
          <View>
            <Text style={styles.newH}>SPENT TILL NOW</Text>
            <Text style={styles.Sda}>1800</Text>
          </View>
          <View>
            <Text style={styles.newH}>DUE DATE</Text>
            <Text style={styles.news}>15 Aug</Text>
          </View>
        </View>
        <Button title="PAY 1500" color="#00D1C1" onPress={alert} />
      </View>
    )
  }

  const alert = () => {
    Alert.alert('dummy')
  }

  const showHeader = () => {
    return (
      <View style={styles.headerWra}>
        <Text style={styles.tas}>Welcome to Simpl</Text>
        <Text style={styles.ta2s}>2 Active accounts</Text>
      </View>
    )
  }

  const firstFlat = () => {
    return (
      <View style={styles.eachS}>
        <FlatList
          data={[1, 2, 3]}
          horizontal={true}
          contentContainerStyle={{ paddingBottom: 5 }}
          // style={{flex:1}}
          // contentContainerStyle={styles.eachS}
          renderItem={renderEachCard}
        />
      </View>
    )
  }

  const payBillItem = () => {
    return (
      <View style={styles.easd}>
        <Image
          style={styles.imgST}
          source={{ uri: 'https://source.unsplash.com/1600x900/?nature,water' }}
        />
        <Text style={styles.neads}>Prepaid</Text>
      </View>
    )
  }

  const payBills = () => {
    return (
      <View style={styles.viewadae}>
        <View style={styles.boada}>
          <Text style={styles.neas}>Recharges & pay bills</Text>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={payBillItem}
          numColumns={4}
        />
      </View>
    )
  }

  const eachItemad = () => {
    return (
      <View style={styles.veiadsa2}>
        <Image
          style={styles.imgdST}
          source={{ uri: 'https://source.unsplash.com/1600x900/?nature,water' }}
        />
      </View>
    )
  }

  const youcanAlso = () => {
    return (
      <View style={styles.viewadae}>
        <View style={styles.boada}>
          <Text style={styles.neas}>You can also use Simpl on</Text>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={eachItemad}
          horizontal={true}
        />
      </View>
    )
  }

  return (
    <View style={[{ flex: 1 }]}>
      <ScrollView style={{ flex: 1 }}>
        {showHeader()}
        {firstFlat()}
        {payBills()}
        {youcanAlso()}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  eachS: {
    // position:'relative',
    // top:150,
    marginTop: -100,
    marginBottom: 5,
    paddingBottom: 5,
  },
  eacas: {
    height: 200,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#fff',

    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 4,
    padding: 20,
  },
  headerWra: {
    backgroundColor: '#00D1C1',
    paddingTop: 30,
    paddingBottom: 120,
  },
  tas: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 20,
  },
  ta2s: {
    fontSize: 14,
    color: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textSTy: {
    fontSize: 16,
    color: '#00A699',
  },
  flexSW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bilasd: {
    backgroundColor: 'rgba(227,63,55,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 2,
  },
  inade: {
    fontSize: 8,
    color: 'rgba(227,63,55,1)',
  },
  newH: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '800',
  },
  Sda: {
    fontSize: 14,
    color: '#000',
    fontWeight: '800',
  },
  news: {
    fontSize: 14,
    color: '#000',
    textAlign: 'right',
  },
  flexSW23: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  imgST: {
    height: 30,
    width: 20,
    borderRadius: 5,
  },
  easd: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 / 4,
    marginVertical: 10,
  },
  neads: {
    fontSize: 14,
    color: '#888888',
  },
  boada: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  viewadae: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginTop: 10,
  },
  neas: {
    fontSize: 14,
    color: '#888888',
    marginLeft: 20,
  },
  imgdST: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  veiadsa2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
})

export default IndexExampleContainer
