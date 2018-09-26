const env: String = 'uat';

const configuration = {
    'baseURL' : '',
    'port' : '',
    'encryption' : '',
    'allowAll': true
};

function getConfig() {
    switch (env) {
        case 'uat':
            configuration.baseURL = '';
			configuration.port = '';
			configuration.allowAll = true;
            break;
        case 'sit':
            configuration.baseURL = '';
            configuration.port = '';
            configuration.allowAll = true;
            break;
        default:
            break;
    }
    return configuration;
}

export const config = getConfig();
