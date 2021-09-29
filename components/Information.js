import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function Information() {

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer1}>
                <Text>Kuinka voida hyvin</Text>
                <Button
                    title="Vahvista mielenterveyttäsi"
                    onPress={() => Linking.openURL('https://mieli.fi/vahvista-mielenterveyttasi/')}
                />
                <Button
                    title="Terve keho, terve mieli"
                    onPress={() => Linking.openURL('https://mielenihmeet.fi/terve-ruumis-terve-mieli/')}
                />
                <Button
                    title="Tunnetaitoja, stressinhallintaa sekä muuta"
                    onPress={() => Linking.openURL('https://www.yths.fi/terveystieto/mielenterveys/')}
                />
                <Button
                    title="Ahdistuksen hallinta"
                    onPress={() => Linking.openURL('https://www.mielenterveystalo.fi/aikuiset/itsehoito-ja-oppaat/itsehoito/ahdistuksen_omahoito/Pages/default.aspx')}
                />
            </View>
            <View style={styles.buttonContainer2}>
                <Text>Tarvitsetko apua? tässä linkit ajanvaraukseen</Text>
                <Button
                    title="Julkinen"
                    onPress={() => Linking.openURL('https://www.hel.fi/helsinki/fi/sosiaali-ja-terveyspalvelut/mielenterveys-ja-paihdepalvelut/terveysasemat/mieppi-mielenterveyspalvelupiste/')}
                />
                <Button
                    title="Opiskelijoille: YTHS"
                    onPress={() => Linking.openURL('https://www.yths.fi/asiointi/ajanvaraus/')}
                />
            </View>
            <View style={styles.buttonContainer3}>
                <Text>Akuutti hätä?</Text>
                <Button
                    title="Apua kriisitilanteessa"
                    onPress={() => Linking.openURL('https://thl.fi/fi/web/mielenterveys/mielenterveyspalvelut/palvelut-kriisitilanteissa')}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer1: {
        flex: 4,
        width: 200,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    buttonContainer2: {
        flex: 2,
        width: 200,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    buttonContainer3: {
        flex: 1,
        width: 200,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
});
