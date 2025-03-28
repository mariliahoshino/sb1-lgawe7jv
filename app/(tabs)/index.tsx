import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1631209121750-a9f656d28f46?w=800' }}
          style={styles.headerImage}
        />
        <Text style={styles.welcomeText}>Gluten Free</Text>
      </View>

      <View style={styles.quickActions}>
        <Link href="/scan" asChild>
          <Pressable style={styles.actionButton}>
            <MaterialCommunityIcons name="barcode-scan" size={32} color="#9C27B0" />
            <Text style={styles.actionText}>Escanear produto</Text>
          </Pressable>
        </Link>
        {/*}
        <Link href="/restaurants" asChild>
          <Pressable style={styles.actionButton}>
            <MaterialCommunityIcons name="silverware-fork-knife" size={32} color="#9C27B0" />
            <Text style={styles.actionText}>Procurar restaurantes</Text>
          </Pressable>
        </Link>
        */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dica do dia</Text>
        <View style={styles.card}>
          <MaterialCommunityIcons name="lightbulb" size={24} color="#9C27B0" />
          <Text style={styles.tipText}>
            Sempre cheque os condimentos - muitos contém fontes ocultas de glúten
            Colocar umas 30 frases e utilizar random, mostrar uma de cada vez
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Receitas em destaque</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recipeScroll}>
          <Link href="/recipes/1" asChild>
            <Pressable style={styles.recipeCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800' }}
                style={styles.recipeImage}
              />
              <Text style={styles.recipeTitle}>Quinoa </Text>
            </Pressable>
          </Link>
          <Link href="/recipes/2" asChild>
            <Pressable style={styles.recipeCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800' }}
                style={styles.recipeImage}
              />
              <Text style={styles.recipeTitle}>Salada Vegetariana</Text>
            </Pressable>
          </Link>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: 200,
    opacity: 0.7,
  },
  welcomeText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  quickActions: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    marginTop: 8,
    color: '#424242',
    fontSize: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#212121',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#424242',
    flex: 1,
  },
  recipeScroll: {
    marginHorizontal: -20,
  },
  recipeCard: {
    width: 200,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 150,
  },
  recipeTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
});