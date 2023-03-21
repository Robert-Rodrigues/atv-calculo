import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default function App() {
  const [n1, setn1] = useState('');
  const [n2, setn2] = useState('');
  const [soma, setSoma] = useState('');

  const Calculo = useCallback(() => {
    const res = Number(n1) + Number(n2);
    setSoma(`Resultado: ${res}`);
  }, [n1, n2]);

  useEffect(() => {
    setSoma('');
  }, [n1, n2]);

  const CalculoF = () => {
    if (n1 && n2) {
      Calculo();
    }
  };

  return (
    <View style={styles.container}>
      <Text h1>{'Cálculo'}</Text>
      <Input style={styles.input}
        placeholder="Valor 1"
        keyboardType="numeric"
        value={n1}
        onChangeText={setn1}
      />
      <Input style={styles.input}
        keyboardType="numeric"
        placeholder="Valor 2"
        value={n2}
        onChangeText={setn2}
      />
      <Button title="Calcular" onPress={CalculoF} />
      <Text h4>{soma}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10
  },
});
