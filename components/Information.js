import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Linking } from 'react-native';
import styles from './Styles';

export default function Information() {

    return (
        <View style={styles.infoContainer}>
            <View style={styles.buttonContainer1}>
                <Text style={{ fontWeight:'bold' }}>Kuinka voida hyvin</Text>
                <Button
                    color='rgb(136, 136, 250)'
                    title="Vahvista mielenterveyttäsi"
                    onPress={() => Linking.openURL('https://mieli.fi/vahvista-mielenterveyttasi/')}
                />
                <Button
                    color='rgb(136, 136, 250)'
                    title="Terve keho, terve mieli"
                    onPress={() => Linking.openURL('https://mielenihmeet.fi/terve-ruumis-terve-mieli/')}
                />
                <Button
                    color='rgb(136, 136, 250)'
                    title="Tunnetaitoja, stressinhallintaa sekä muuta"
                    onPress={() => Linking.openURL('https://www.yths.fi/terveystieto/mielenterveys/')}
                />
                <Button
                    color='rgb(136, 136, 250)'
                    title="Ahdistuksen hallinta"
                    onPress={() => Linking.openURL('https://www.mielenterveystalo.fi/aikuiset/itsehoito-ja-oppaat/itsehoito/ahdistuksen_omahoito/Pages/default.aspx')}
                />
            </View>
            <View style={styles.buttonContainer2}>
                <Text style={{ fontWeight:'bold' }}>Tarvitsetko apua? tässä linkit ajanvaraukseen</Text>
                <Button
                    color='rgb(136, 136, 250)'
                    title="Julkinen"
                    onPress={() => Linking.openURL('https://www.hel.fi/helsinki/fi/sosiaali-ja-terveyspalvelut/mielenterveys-ja-paihdepalvelut/terveysasemat/mieppi-mielenterveyspalvelupiste/')}
                />
                <Button
                    color='rgb(136, 136, 250)'
                    title="Opiskelijoille: YTHS"
                    onPress={() => Linking.openURL('https://www.yths.fi/asiointi/ajanvaraus/')}
                />
            </View>
            <View style={styles.buttonContainer3}>
                <Text style={{ fontWeight:'bold' }}>Akuutti hätä?</Text>
                <Button
                    color='rgb(136, 136, 250)'
                    title="Apua kriisitilanteessa"
                    onPress={() => Linking.openURL('https://thl.fi/fi/web/mielenterveys/mielenterveyspalvelut/palvelut-kriisitilanteissa')}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
