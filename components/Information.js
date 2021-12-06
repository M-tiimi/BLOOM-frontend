import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Linking } from 'react-native';
import styles from './Styles';

//information and links to mental health resources
export default function Information() {

    return (
        <View style={styles.infoContainer}>
            <View style={styles.buttonContainer1}>
                <Text style={{ fontWeight:'bold' }}>How to feel better</Text>
                <Button
                    color='rgb(116, 144, 147)'
                    title="Strengthen yourself"
                    onPress={() => Linking.openURL('https://mieli.fi/vahvista-mielenterveyttasi/')}
                />
                <Button
                    color='rgb(116, 144, 147)'
                    title="Healthy body, healthy mind"
                    onPress={() => Linking.openURL('https://mielenihmeet.fi/terve-ruumis-terve-mieli/')}
                />
                <Button
                    color='rgb(116, 144, 147)'
                    title="Emotional skills, stress management and more"
                    onPress={() => Linking.openURL('https://www.yths.fi/terveystieto/mielenterveys/')}
                />
                <Button
                    color='rgb(116, 144, 147)'
                    title="Anxiety management"
                    onPress={() => Linking.openURL('https://www.mielenterveystalo.fi/aikuiset/itsehoito-ja-oppaat/itsehoito/ahdistuksen_omahoito/Pages/default.aspx')}
                />
            </View>
            <View style={styles.buttonContainer2}>
                <Text style={{ fontWeight:'bold' }}>Do you need help? Here are the links for making an appointment (in Finnish)</Text>
                <Button
                    color='rgb(116, 144, 147)'
                    title="For everyone"
                    onPress={() => Linking.openURL('https://www.hel.fi/helsinki/fi/sosiaali-ja-terveyspalvelut/mielenterveys-ja-paihdepalvelut/terveysasemat/mieppi-mielenterveyspalvelupiste/')}
                />
                <Button
                    color='rgb(116, 144, 147)'
                    title="For students: YTHS"
                    onPress={() => Linking.openURL('https://www.yths.fi/asiointi/ajanvaraus/')}
                />
            </View>
            <View style={styles.buttonContainer3}>
                <Text style={{ fontWeight:'bold' }}>Having an emergency?</Text>
                <Button
                    color='rgb(116, 144, 147)'
                    title="Help in a crisis"
                    onPress={() => Linking.openURL('https://thl.fi/fi/web/mielenterveys/mielenterveyspalvelut/palvelut-kriisitilanteissa')}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
