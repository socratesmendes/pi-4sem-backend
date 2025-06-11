API IoT - Dados de Sensores
API REST para gerenciamento de dados de dispositivos IoT com análises de consumo e temperatura.
🚀 Instalação Rápida
bash# Clone e instale
git clone https://github.com/seu-usuario/iot-api.git
cd iot-api
npm install

# Configure o ambiente
cp .env.example .env

# Inicie
npm start
📋 Endpoints Principais
MétodoEndpointDescriçãoGET/dataLista todos os dadosGET/data/:idBusca por IDPOST/dataCria novo registroPUT/data/:idAtualiza dadosDELETE/data/:idRemove dadosGET/data/periodFiltra por períodoGET/data/statsEstatísticas detalhadas
💾 Modelo de Dados
json{
  "device_name": "Sensor_01",
  "date": "2024-01-15T14:30:00.000Z",
  "consumption": 125.5,
  "temperature": {
    "avg": 23.5,
    "max": 25.0,
    "min": 22.0
  },
  "event": "normal_operation"
}
🔧 Exemplos de Uso
Criar Dados
bashcurl -X POST http://localhost:3000/data \
  -H "Content-Type: application/json" \
  -d '{
    "device_name": "Sensor_01",
    "date": "2024-01-15T14:30:00Z",
    "consumption": 125.5,
    "temperature": {"avg": 23.5, "max": 25.0, "min": 22.0}
  }'
Buscar por Período
bashcurl "http://localhost:3000/data/period?startDate=2024-01-01&endDate=2024-01
