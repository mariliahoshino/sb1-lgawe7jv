import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.scanArea}>
        <MaterialCommunityIcons name="barcode-scan" size={100} color="#9C27B0" />
        <Text style={styles.scanText}>Escanear o código de barras do produto</Text>
        <Text style={styles.scanSubtext}>
          Aponte a câmera para o código de barras para verificar se é gluten free
        </Text>
      </View>

      <Pressable style={styles.scanButton}>
        <Text style={styles.scanButtonText}>Abrir câmera (escanear)</Text>
      </Pressable>

      <View style={styles.recentScans}>
        <Text style={styles.recentTitle}>Recentes está fixo, depois armazenar internamente o histórico</Text>
        <View style={styles.scanItem}>
          <MaterialCommunityIcons name="check-circle" size={24} color="#4CAF50" />
          <View style={styles.scanInfo}>
            <Text style={styles.productName}>Bolacha integral</Text>
            <Text style={styles.scanDate}>Sem gluten • 2h atrás</Text>
          </View>
        </View>
        <View style={styles.scanItem}>
          <MaterialCommunityIcons name="close-circle" size={24} color="#F44336" />
          <View style={styles.scanInfo}>
            <Text style={styles.productName}>Pão de forma </Text>
            <Text style={styles.scanDate}>Contém gluten • 1d atrás</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  scanArea: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 40,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scanText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginTop: 20,
    marginBottom: 10,
  },
  scanSubtext: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
  },
  scanButton: {
    backgroundColor: '#9C27B0',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  recentScans: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 15,
  },
  scanItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  scanInfo: {
    marginLeft: 15,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  scanDate: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
});