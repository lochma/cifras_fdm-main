const CACHE_NAME = 'v1.1';
const urlsToCache = [
    'playlists.js',
    'script.js',
    'bootstrap.min.js',
    'style.css',
    'manifest.json',
    'index.html',
    'bootstrap.min.css',
    '06215d6691.js',
    'musicas.js',
    'jquery-3.5.1.min.js',
    'icon-192x192.png',
    'imagemlogofdm.png',
    'music.html?id=1',
    'music.html?id=2',
    'music.html?id=3',
    'music.html?id=4',
    'music.html?id=5',
    'music.html?id=6',
    'music.html?id=7',
    'music.html?id=8',
    'music.html?id=9',
    'music.html?id=10',
    'music.html?id=11',
    'music.html?id=12',
    'music.html?id=13',
    'music.html?id=14',
    'music.html?id=15',
    'music.html?id=16',
    'music.html?id=17',
    'music.html?id=18',
    'music.html?id=19',
    'music.html?id=20',
    'music.html?id=21',
    'music.html?id=22',
    'music.html?id=23',
    'music.html?id=24',
    'music.html?id=25',
    'music.html?id=26',
    'music.html?id=27',
    'music.html?id=28',
    'music.html?id=29',
    'music.html?id=30',
    'music.html?id=31',
    'music.html?id=32',
    'music.html?id=33',
    'music.html?id=34',
    'music.html?id=35',
    'music.html?id=36',
    'music.html?id=37',
    'music.html?id=38',
    'music.html?id=39',
    'music.html?id=40',
    'music.html?id=41',
    'music.html?id=42',
    'music.html?id=43',
    'music.html?id=44',
    'music.html?id=45',
    'music.html?id=46',
    'music.html?id=47',
    'music.html?id=48',
    'music.html?id=49',
    'music.html?id=50',
    'music.html?id=51',
    'music.html?id=52',
    'music.html?id=53',
    'music.html?id=54',
    'music.html?id=55',
    'music.html?id=56',
    'music.html?id=57',
    'music.html?id=58',
    'music.html?id=59',
    'music.html?id=60',
    'music.html?id=61',
    'music.html?id=62',
    'music.html?id=63',
    'music.html?id=64',
    'music.html?id=65',
    'music.html?id=66',
    'music.html?id=67',
    'music.html?id=68',
    'music.html?id=69',
    'music.html?id=70',
    'music.html?id=71',
    'music.html?id=72',
    'music.html?id=73',
    'music.html?id=74',
    'music.html?id=75',
    'music.html?id=76',
    'music.html?id=77',
    'music.html?id=78',
    'music.html?id=79',
    'music.html?id=80',
    'music.html?id=81',
    'music.html?id=82',
    'music.html?id=83',
    'music.html?id=84',
    'music.html?id=85',
    'music.html?id=86',
    'music.html?id=87',
    'music.html?id=88',
    'music.html?id=89',
    'music.html?id=90',
    'music.html?id=91',
    'music.html?id=92',
    'music.html?id=93',
    'music.html?id=94',
    'music.html?id=95',
    'music.html?id=96',
    'music.html?id=97',
    'music.html?id=98',
    'music.html?id=99',
    'music.html?id=100',
    'music.html?id=101',
    'music.html?id=102',
    'music.html?id=103',
    'music.html?id=104',
    'music.html?id=105',
    'music.html?id=106',
    'music.html?id=107',
    'music.html?id=108',
    'music.html?id=109',
    'music.html?id=110',
    'music.html?id=111',
    'music.html?id=112',
    'music.html?id=113',
    'music.html?id=114',
    'music.html?id=115',
    'music.html?id=116',
    'music.html?id=117',
    'music.html?id=118',
    'music.html?id=119',
    'music.html?id=120',
    'music.html?id=121',
    'music.html?id=122',
    'music.html?id=123',
    'music.html?id=124',
    'music.html?id=125',
    'music.html?id=126',
    'music.html?id=127',
    'music.html?id=128',
    'music.html?id=129',
    'music.html?id=130',
    'music.html?id=131',
    'music.html?id=132',
    'music.html?id=133',
    'music.html?id=134',
    'music.html?id=135',
    'music.html?id=136',
    'music.html?id=137',
    'music.html?id=138',
    'music.html?id=139',
    'music.html?id=140',
    'music.html?id=141',
    'music.html?id=142',
    'music.html?id=143',
    'music.html?id=144',
    'music.html?id=145',
    'music.html?id=146',
    'music.html?id=147',
    'music.html?id=148',
    'music.html?id=149',
    'music.html?id=150',
    'music.html?id=151',
    'music.html?id=152',
    'music.html?id=153',
    'music.html?id=154',
    'music.html?id=155',
    'music.html?id=156',
    'music.html?id=157',
    'music.html?id=158',
    'music.html?id=159',
    'music.html?id=160',
    'music.html?id=161',
    'music.html?id=162',
    'music.html?id=163',
    'music.html?id=164',
    'music.html?id=165',
    'music.html?id=166',
    'music.html?id=167',
    'music.html?id=168',
    'music.html?id=169',
    'music.html?id=170',
    'music.html?id=171',
    'music.html?id=172',
    'music.html?id=173',
    'music.html?id=174',
    'music.html?id=175',
    'music.html?id=176',
    'music.html?id=177',
    'music.html?id=178',
    'music.html?id=179',
    'music.html?id=180',
    'music.html?id=181',
    'music.html?id=182',
    'music.html?id=183',
    'music.html?id=184',
    'music.html?id=185',
    'music.html?id=186',
    'music.html?id=187',
    'music.html?id=188',
    'music.html?id=189',
    'music.html?id=190',
    'music.html?id=191',
    'music.html?id=192',
    'music.html?id=193',
    'music.html?id=194',
    'music.html?id=195',
    'music.html?id=196',
    'music.html?id=197',
    'music.html?id=198',
    'music.html?id=199',
    'music.html?id=200',
    'music.html?id=201',
    'music.html?id=202',
    'music.html?id=203',
    'music.html?id=204',
    'music.html?id=205',
    'music.html?id=206',
    'music.html?id=207',
    'music.html?id=208',
    'music.html?id=209',
    'music.html?id=210',
    'music.html?id=211',
    'music.html?id=212',
    'music.html?id=213',
    'music.html?id=214',
    'music.html?id=215',
    'music.html?id=216',
    'music.html?id=217',
    'music.html?id=218',
    'music.html?id=219',
    'music.html?id=220',
    'music.html?id=221',
    'music.html?id=222',
    'music.html?id=223',
    'music.html?id=224',
    'music.html?id=225',
    'music.html?id=226',
    'music.html?id=227',
    'music.html?id=228',
    'music.html?id=229',
    'music.html?id=230',
    'music.html?id=231',
    'music.html?id=232',
    'music.html?id=233',
    'music.html?id=234',
    'music.html?id=235',
    'music.html?id=236',
    'music.html?id=237',
    'music.html?id=238',
    'music.html?id=239',
    'music.html?id=240',
    'music.html?id=241',
    'music.html?id=242',
    'music.html?id=243',
    'music.html?id=244',
    'music.html?id=245',
    'music.html?id=246',
    'music.html?id=247',
    'music.html?id=248',
    'music.html?id=249',
    'music.html?id=250',
    'music.html?id=251',
    'music.html?id=252',
    'music.html?id=253',
    'music.html?id=254',
    'music.html?id=255',
    'music.html?id=256',
    'music.html?id=257',
    'music.html?id=258',
    'music.html?id=259',
    'music.html?id=260',
    'music.html?id=261',
    'music.html?id=262',
    'music.html?id=263',
    'music.html?id=264',
    'music.html?id=265',
    'music.html?id=266',
    'music.html?id=267',
    'music.html?id=268',
    'music.html?id=269',
    'music.html?id=270',
    'music.html?id=271',
    'music.html?id=272',
    'music.html?id=273',
    'music.html?id=274',
    'music.html?id=275',
    'music.html?id=276',
    'music.html?id=277',
    'music.html?id=278',
    'music.html?id=279',
    'music.html?id=280',
    'music.html?id=281',
    'music.html?id=282',
    'music.html?id=283',
    'music.html?id=284',
    'music.html?id=285',
    'music.html?id=286',
    'music.html?id=287',
    'music.html?id=288',
    'music.html?id=289',
    'music.html?id=290',
    'music.html?id=291',
    'music.html?id=292',
    'music.html?id=293',
    'music.html?id=294',
    'music.html?id=295',
    'music.html?id=296',
    'music.html?id=297',
    'music.html?id=298',
    'music.html?id=299',
    'music.html?id=300',
    'music.html?id=301',
    'music.html?id=302',
    'music.html?id=303',
    'music.html?id=304',
    'music.html?id=305',
    'music.html?id=306',
    'music.html?id=307',
    'music.html?id=308',
    'music.html?id=309',
    'music.html?id=310',
    'music.html?id=311',
    'music.html?id=312',
    'music.html?id=313',
    'music.html?id=314',
    'music.html?id=315',
    'music.html?id=316',
    'music.html?id=317',
    'music.html?id=318',
    'music.html?id=319',
    'music.html?id=320',
    'music.html?id=321',
    'music.html?id=322',
    'music.html?id=323',
    'music.html?id=324',
    'music.html?id=325',
    'music.html?id=326',
    'music.html?id=327',
    'music.html?id=328',
    'music.html?id=329',
    'music.html?id=330',
    'music.html?id=331',
    'music.html?id=332',
    'music.html?id=333',
    'music.html?id=334',
    'music.html?id=335',
    'music.html?id=336',
    'music.html?id=337',
    'music.html?id=338',
    'music.html?id=339',
    'music.html?id=340',
    'music.html?id=341',
    'music.html?id=342',
    'music.html?id=343',
    'music.html?id=344',
    'music.html?id=345',
    'music.html?id=346',
    'music.html?id=347',
    'music.html?id=348',
    'music.html?id=349',
    'music.html?id=350',
    'music.html?id=351',
    'music.html?id=352',
    'music.html?id=353',
    'music.html?id=354',
    'music.html?id=355',
    'music.html?id=356',
    'music.html?id=357',
    'music.html?id=358',
    'music.html?id=359',
    'music.html?id=360',
    'music.html?id=361',
    'music.html?id=362',
    'music.html?id=363',
    'music.html?id=364',
    'music.html?id=365',
    'music.html?id=366',
    'music.html?id=367',
    'music.html?id=368',
    'music.html?id=369',
    'music.html?id=370',
    'music.html?id=371',
    'music.html?id=372',
    'music.html?id=373',
    'music.html?id=374',
    'music.html?id=375',
    'music.html?id=376',
    'music.html?id=377',
    'music.html?id=378',
    'music.html?id=379',
    'music.html?id=380',
    'music.html?id=381',
    'music.html?id=382',
    'music.html?id=383',
    'music.html?id=384',
    'music.html?id=385',
    'music.html?id=386',
    'music.html?id=387',
    'music.html?id=388',
    'music.html?id=389',
    'music.html?id=390',
    'music.html?id=391',
    'music.html?id=392',
    'music.html?id=393',
    'music.html?id=394',
    'music.html?id=395',
    'music.html?id=396',
    'music.html?id=397',
    'music.html?id=398',
    'music.html?id=399',
    'music.html?id=400',
    'music.html?id=401',
    'music.html?id=402',
    'music.html?id=403',
    'music.html?id=404',
    'music.html?id=405',
    'music.html?id=406',
    'music.html?id=407',
    'music.html?id=408',
    'music.html?id=409',
    'music.html?id=410',
    'music.html?id=411',
    'music.html?id=412',
    'music.html?id=413',
    'music.html?id=414',
    'music.html?id=415',
    'music.html?id=416',
    'music.html?id=417',
    'music.html?id=418',
    'music.html?id=419',
    'music.html?id=420',
    'music.html?id=421',
    'music.html?id=422',
    'music.html?id=423',
    'music.html?id=424',
    'music.html?id=425',
    'music.html?id=426',
    'music.html?id=427',
    'music.html?id=428',
    'music.html?id=429',
    'music.html?id=430',
    'music.html?id=431',
    'music.html?id=432',
    'music.html?id=433',
    'music.html?id=434',
    'music.html?id=435',
    'music.html?id=436',
    'music.html?id=437',
    'music.html?id=438',
    'music.html?id=439',
    'music.html?id=440',
    'music.html?id=441',
    'music.html?id=442',
    'music.html?id=443',
    'music.html?id=444',
    'music.html?id=445',
    'music.html?id=446',
    'music.html?id=447',
    'music.html?id=448',
    'music.html?id=449',
    'music.html?id=450',
    'music.html?id=451',
    'music.html?id=452',
    'music.html?id=453',
    'music.html?id=454',
    'music.html?id=455',
    'music.html?id=456',
    'music.html?id=457',
    'music.html?id=458',
    'music.html?id=459',
    'music.html?id=460',
    'music.html?id=461',
    'music.html?id=462',
    'music.html?id=463',
    'music.html?id=464',
    'music.html?id=465',
    'music.html?id=466',
    'music.html?id=467',
    'music.html?id=468',
    'music.html?id=469',
    'music.html?id=470',
    'music.html?id=471',
    'music.html?id=472',
    'music.html?id=473',
    'music.html?id=474',
    'music.html?id=475',
    'music.html?id=476',
    'music.html?id=477',
    'music.html?id=478',
    'music.html?id=479',
    'music.html?id=480',
    'music.html?id=481',
    'music.html?id=482',
    'music.html?id=483',
    'music.html?id=484',
    'music.html?id=485',
    'music.html?id=486',
    'music.html?id=487',
    'music.html?id=488',
    'music.html?id=489',
    'music.html?id=490',
    'music.html?id=491',
    'music.html?id=492',
    'music.html?id=493',
    'music.html?id=494',
    'music.html?id=495',
    'music.html?id=496',
    'music.html?id=497',
    'music.html?id=498',
    'music.html?id=499',
    'music.html?id=500'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
