-- Active: 1695767739084@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);

INSERT INTO users (id, name, email, password, created_at) 
VALUES 
('u001', 'Fulano', 'fulano@email.com', 'fulano123', '26/09/2023'),
('u002', 'Ciclano', 'ciclano@email.com', 'ciclano123', '26/09/2023'),
('u003', 'Beltrano', 'beltrano@email.com', 'beltrano123', '26/09/2023');

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

INSERT INTO products (id, name, price, description, image_url) 
VALUES 
('p001', 'Mouse Razer', 899.99, 'mouse gamer', 'https://images.kabum.com.br/produtos/fotos/127418/mouse-sem-fio-gamer-razer-basilisk-ultimate-chroma-11-botoes-20000dpi-rz01-03170200-r3u1_1599683506_gg.jpg'),
('p002', 'Monitor Husky', 999.99, 'monitor gamer', 'https://images.kabum.com.br/produtos/fotos/115384/monitor-gamer-husky-storm-27-led-curvo-165-hz-full-hd-1ms-adaptive-sync-hdmi-displayport-ajuste-de-angulo-hgmt001_1678993389_gg.jpg'),
('p003', 'Teclado Logitech', 849.99, 'teclado gamer', 'https://images.kabum.com.br/produtos/fotos/120492/teclado-mecanico-gamer-sem-fio-logitech-g915-tkl-rgb-usb-e-bluetooth-ultrafino-switch-de-perfil-baixo-gl-tactile-brown-branco-920-009660_1626267064_gg.jpg'),
('p004', 'Cadeira DXracing', 1599.99, 'cadeira gamer', 'https://ds92okzpvwldu.cloudfront.net/Custom/Content/Products/24/26/2426224_cadeira-gamer-dxracer-nex-preta-pink-ohok133pw-341_z1_637312076057661392.jpg'),
('p005', 'Mouse Pad Fallen', 119.99, 'mouse pad gamer', 'https://images.kabum.com.br/produtos/fotos/347336/mousepad-gamer-fallen-cs-go-ct-tr-speed-estendido-900x400mm-mp-fn-cs-ct-sm-es_1655996069_gg.jpg');
