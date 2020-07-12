const {JWE} = require('jose');
const TOKEN_TTL_MIN = 10;
const CREDIT_CARD_DATA = JSON.stringify({credit_card_number: '4111111111111111', cvv: '090'});
const JWK_KEY = {
    "jwk": {
        "e": "AQAB",
        "n": "1_2coL0zqSsrdJEAxV_yDWjOyl2ezApltrhXa2axpLdzCLMwqaITlj04x1d6BnhpjuM0fs-VtWTaL745-ev2ZtoxHYqW-NRutvTf5Xa8D6RM1yFIeLn_Q-vSImw9Psed6GuR8xtLBycP37rB1-5qOyztJXihmDZQKoD90PgdBTymajpo1-2-JHxHIKiRAJoSlHmq3i9C-vuzXKaxsDAqnLW7eov5qbSvcHJ_Ewan1Q3kyHapBFX1GEWJM5IE4dEAOCJUyx13tyEYW3H0LMJjNSmtXNXLMkQ9hTgljHEvBWCCZkwW7YMZScis4ceXI8fYWztMDNwi4anYeESBS7a1bVFMyjTxvPqQMczgTtowYSpU6_1_PrOVfMZ6QZr8stXWkpcTXwGa3toEt2bgYFWEgPlPO8RFeLQ-xkoiwxvaBuX_sNcHQKc4I1DAOfHSkOdmEVQO8-Fjx6xvHVw3zSrnN462f1jKHwYw27tzasFbdpDhDVdfEEYj-_yqslmQY278fh2wSIGa4DzO9SttSi9055utfteMtJJ9txt6tNtyLL3gj8_8v2tsd-hv-Y-IhADJGiOlqxCE_sfpEV5RrD6iGxfBjX1gb3P6kX4LtEtFssoL9-zLVZQiMoPlhWyKevVf0ISlRWwYxunejSOLtRRhkNxKgHp9ARehH3SWv2xaI5M",
        "kty": "RSA",
        "kid": "test_1",
        "use": "enc"
    },
    "created": 1594571540648,
    "version": 1,
    "key_type": "RSA",
    "name": "test",
    "protected_headers": {
        "kid": "test_1",
        "enc": "A256GCM"
    }
};


const createdDate = new Date();
const expiredDate = new Date(createdDate);
expiredDate.setMinutes(expiredDate.getMinutes() + TOKEN_TTL_MIN);
const date = {
    iat: createdDate.getTime(),
    exp: expiredDate.getTime(),
};
const ciphertext = JWE.encrypt(CREDIT_CARD_DATA, JWK_KEY.jwk, Object.assign(JWK_KEY.protected_headers, date));
console.log(ciphertext);
