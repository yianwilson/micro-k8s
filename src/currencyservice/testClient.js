var PROTO_PATH = __dirname + '/proto/demo.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var currencyService = protoDescriptor.hipstershop;

function main() {
    var client = new currencyService.CurrencyService(
        'localhost:8080', grpc.credentials.createInsecure()
    );
    var globalTime = 0;
    var stopAt = 8 * 60 * 60 * 1000; // 8 hours in millis
    var loop = setInterval(() => {
        callApi(client);
        globalTime += 2000;
        if (globalTime == stopAt) {
            clearInterval(loop);
        }
    }, 2000);
}

function callApi(grpcClient) {
    grpcClient.getSupportedCurrencies({}, function (err, response) {
        console.log('Cart is: :', response);
    });
    grpcClient.convert({
        from: {
            currency_code: 'USD',
            units: 100,
            nanos: 0,
        },
        to_code: 'CAD'

    }, function (err, response) {
        console.log('Cart is: :', response);
    });
}

main();