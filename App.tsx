import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'
import { Asset } from 'expo-asset'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// async function openDatabase(
//   pathToDatabasesFile: string
// ): Promise<SQLite.WebSQLDatabase> {
//   const dbHome = FileSystem.documentDirectory + 'SQLite'
//   if (!(await FileSystem.getInfoAsync(dbHome)).exists) {
//     await FileSystem.makeDirectoryAsync(dbHome)
//   }
//   await FileSystem.downloadAsync(
//     Asset.fromModule(pathToDatabasesFile).uri,
//     dbHome + '/bible.db'
//   )
//   return SQLite.openDatabase('bible.db')
// }

function openDatabase(): SQLite.WebSQLDatabase {
  return SQLite.openDatabase('bible.db')
}

const db = openDatabase()
db.transaction(
  (t) => {
    t.executeSql('select * from bible_book', [], (tx, result) => {
      console.log(result.rows)
    })
  },
  (error) => console.log(error)
)
console.log('111')
