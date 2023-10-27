# React Native Workshop

# NodeJS

**Node.js** adalah JavaScript runtime yang dibangun di Chrome's V8 JavaScript engine. Dengan menggunakan node.js developers dapat menjalankan kode JavaScript disisi server

**Npm (Node Package Manager),** memudahkan developer untuk memanfaatkan library dan tools yang dibutuhkan di proyek Anda.

**Cara menginstall Node.js:**

1. Kunjungi situs resmi Node.js di [nodejs.org](https://nodejs.org/).
2. Pilih versi Node.js yang ingin Anda install (direkomendasikan menggunakan versi LTS).
3. Unduh installer Node.js yang sesuai dengan sistem operasi Anda (Windows, macOS, atau Linux).
4. Jalankan installer yang telah diunduh.
5. Ikuti instruksi pada layar untuk menyelesaikan proses instalasi.
6. Setelah instalasi selesai, Anda dapat memeriksa apakah Node.js berhasil terpasang dengan membuka terminal atau command prompt dan menjalankan perintah `node -v`. Jika versi Node.js ditampilkan, itu berarti Node.js telah terinstall dengan sukses.

# React Native Fundamental

Sebelum memulai belajar react native, kita akan menggunakan expo untuk development environtmentnya.

Jika Anda baru dalam mobile development, hal termudah untuk memulai adalah dengan Expo Go.

Expo adalah seperangkat alat dan layanan yang dibangun berdasarkan React Native dan, expo dapat membantu developer untuk develop aplikasi React Native dalam hitungan menit, hanya memerlukan Node.js dan perangkat mobile saja.

Beberapa developer mungkin lebih prefer menggunakan React Native CLI dibandingkan Expo. namun diperlukan Xcode atau Android Studio dan beberapa setup yang membutuhkan waktu yang lama.

Perlu diketahui, dalam case industri jarang sekali ada yang menggunakan Expo, karena keterbatasan aksebilitas

Download expo in google play store

### Installing

```bash
npx create-expo-app welcomeReactNative
cd welcomeReactNative
npx expo start
```

### Component

```jsx
import React from "react";
import { Text } from "react-native";

const Profile = () => {
  return <Text>Hello, Namaku Fahmi!</Text>;
};

export default Profile;
```

untuk mendefinisikan component bernama  `Profile` , pertama gunakan JavaScript’s `[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)` to import React dan React Native’s `[Text](https://reactnative.dev/docs/next/text)` Component

```jsx
import React from "react";
import { Text } from "react-native";
```

Component diawali dengan sebuah function:

```jsx
const Profile = () => {};
```

Function component dapat me-returns sebuah **React element.** React elements mendeskripsikan apa yang ditampil discreen

Dimana `Profile` component menampilkan  `<Text>` element:

```jsx
const Profile = () => {
  return <Text>Hello, I am your cat!</Text>;
};
```

export function component tersebut dengan perintah `export default` pada JavaScript’s

```jsx
export default Profile;
```

### JSX

React dan React Native menggunakan **JSX,** yang merupakan syntax untuk membuat elements (mirip HTML) dalam JavaScript seperti:

```jsx
<Text>Hello, Namaku Fahmi!</Text>
```

Dikarenakan JSX adalah JavaScript, anda juga dapat menggunakan variable didalamnya. Seperti contoh kita mau menampilkan nama dari kucing dimana nama nya diambil dari variable `name`,

```jsx
import React from "react";
import { Text } from "react-native";

const Profile = () => {
  const name = "Fahmi";
  return <Text>Hello, Namaku {name}!</Text>;
};

export default Profile;
```

Tidak hanya variable, beberapa perintah JavaScript juga dapat bekerja, dengan mensisipkannya diantara curly braces, seperti contoh pemanggilan fungsi seperti `{getFullName("Rum", "Tum", "Tugger")}`

```jsx
import React from "react";
import { Text } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
};

const Profile = () => {
  return <Text>Hello, Namaku {getFullName("Fahmi", "M", "Syaifudin")}!</Text>;
};

export default Profile;
```

### Props

**Props** atau kepanjangan dari “properties”. Props berguna sebagai parameter untuk menkostumisasi React components. seperti contoh, anda dapat memanggil beberapa component `<Cat>` namun didalamnya menggunakan `nama` yang dinamis

```jsx
import React from "react";
import { Text, View } from "react-native";

const Name = (props) => {
  return (
    <View>
      <Text>Hello, Namaku {props.name}!</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View>
      <Name name="Maru" />
      <Name name="Jellylorum" />
      <Name name="Spot" />
    </View>
  );
};

export default Profile;
```

### State

**State** simpelnya adalah data ditiap component. State berguna untuk menghandle data yang berubah setiap waktu yang datang ketika terdapat interaksi dari user (button klik, input form dll).

Anda dapat menggunakan state dengan memanggil  [React’s `useState` Hook](https://react.dev/learn/state-a-components-memory).

```jsx
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Profile = (props) => {
  const [isBuzy, setIsBuzy] = useState(true);

  return (
    <View>
      <Text>
        Hello Namaku {props.name}, Sekarang sedang
        {props.sibuk ? "sibuk" : "tidak sibuk"}
      </Text>
      <Button
        title={isBusy ? "Tidak Sibuk" : "Sibuk"}
        onPress={() => {
          setIsBusy(!isBusy);
        }}
      />
    </View>
  );
};

export default Profile;
```

Pertama, import dulu `useState` dari library React seperti dibawah:

```jsx
import React, { useState } from "react";
```

Kemudian deklarasikan state dengan memanggil `useState` didalam fungsi, dalam contoh dibawah ini `useState` membuat sebuah variable bernama `isHungry`

```jsx
const Profile = (props: ProfilProps) => {
  const [isBuzy, setIsBuzy] = useState(true);
  // ...
};
```

Anda dapat menggunakan  `useState` tidak hanya untuk data boolean, tapi juga data yang lain seperti: strings, numbers, Booleans, arrays, objects.

Pemanggilan `useState` melakukan dua hal:

- membuat state variable `isBuzy` dengan nilai awalnya yaitu true
- membuat sebuah function untuk mengatur state variable dari `isBuzy` yang bernama —`setIsBuzy`

Sebenarnya gak ada ketentuan khusus dalam penamaannya. Namun harus diingat pattern atau format pendefinisian state harus begini`[<getter>, <setter>] = useState(<initialValue>)`

Kemudian tambahkan  `[Button](https://reactnative.dev/docs/button)` Component dan berikan sebuah trigger  `onPress` property:

```jsx
<Button
  onPress={() => {
    setIsBuzy(false);
  }}
  //..
/>
```

Ketika seseorang menekan tombol, fungsi `onPress` dipanggil, dan mengeksekusi `setIsBuzy(false)`. yang mana fungsi ini akan merubah nilai state dari  `isBuzy` menjadi `false`. Ketika `isBuzy` menjadi false, dan `Button` akan berubah menjadi “Tidak Sibuk”, karena button akan berganti nama menjadi “Tidak Sibuk” berdasarkan state `isBuzy`

### Looping component

Dalam React Native, Kamu dapat melakukan looping menggunakan `map` function, yang merupakan fungsi bawaan dari javascript array function. Fungsi ini dapat mengiterasi item/component berdasarkan sebuah array dan merender component menjadi lebih dinamis

Berikut adalah contoh penggunaan `map` function :

```jsx
import React from "react";
import { View, Text } from "react-native";

const MyList = () => {
  const [items, setItems] = useState(["Farhan", "Angel"]);

  return (
    <View>
      {items.map((item, index) => (
        <Text key={index}>Namanya adalah {item}</Text>
      ))}
    </View>
  );
};

export default MyList;
```

Dalam contoh ini, kita memiliki serangkaian item. Kami menggunakan fungsi `map` untuk mengulangi setiap item dan mengembalikan komponen `<Text>` untuk setiap item. Prop `key` digunakan untuk mengidentifikasi secara unik setiap item dalam daftar, ingat penggunaan prop Key ini wajib saat melakukan looping.

### Handle Input

Untuk menangani input teks di React Native, Anda dapat menggunakan komponen `<TextInput>`. yang merupakan komponen yang memungkinkan pengguna memasukkan teks.

`<TextInput>` memiliki sejumlah property untuk menyesuaikan tampilan dan perilakunya:

- `onChangeText` : Fungsi yang dipanggil setiap kali teks dalam input berubah.
- `placeholder`: Teks yang ditampilkan di input saat kosong.
- `value`: Nilai awal input.

```jsx
import React from "react";
import { TextInput } from "react-native";

const MyComponent = () => {
  const [inputText, setInputText] = React.useState("");

  return (
    <TextInput
      placeholder="Enter some text..."
      value={inputText}
      onChangeText={(text) => setInputText(text)}
    />
  );
};

export default MyComponent;
```
