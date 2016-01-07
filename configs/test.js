var cfg = {};

cfg.dbConfig = process.env.DATABASE_URL;

cfg.gcs = {
    bucketName: process.env.DAKDAK_BUCKET_NAME,
    baseUrl: 'https://storage.googleapis.com',

    "type": process.env.DAKDAK_TYPE,
    projectId: process.env.DAKDAK_PROJECT_ID,
    "project_id": process.env.DAKDAK_PROJECT_ID,
    "private_key_id": process.env.DAKDAK_PRIVATE_KEY_ID,
    "private_key": process.env.DAKDAK_PRIVATE_KEY,
    "client_email": process.env.DAKDAK_CLIENT_EMAIL,
    "client_id": process.env.DAKDAK_CLIENT_ID,
    "auth_uri": process.env.DAKDAK_AUTH_URI,
    "token_uri": process.env.DAKDAK_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.DAKDAK_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.DAKDAK_CLIENT_X509_CERT_URL
};

cfg.jwt = { secret: process.env.DAKDAK_JWT_SECRET };

cfg.facebook = {
    clientID: process.env.DAKDAK_FB_APP_ID,
    clientSecret: process.env.DAKDAK_FB_APP_SECRET,
};


module.exports = cfg;
