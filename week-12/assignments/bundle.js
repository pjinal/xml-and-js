(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const countries = require("./assignment");
    
    const getAll = ({ id, first_name, last_name, email, gender, ip_address, country, postal_code  } = {}) =>
      new Promise((resolve) => {
        let result = Array.from(countries);
    
        if (id) {
          result = result.filter((item) => item.id === id);
        }
    
        if (first_name) {
          result = result.filter((item) => item.first_name === first_name);
        }
    
        if (last_name) {
          result = result.filter((item) => item.last_name === last_name);
        }
    
        if (email) {
            result = result.filter((item) => item.email === email);
          }
          if (gender) {
            result = result.filter((item) => item.gender === gender);
          }
          if (ip_address) {
            result = result.filter((item) => item.ip_address === ip_address);
          }
          if (country) {
            result = result.filter((item) => item.country === country);
          }
          if (postal_code) {
            result = result.filter((item) => item.postal_code === postal_code);
          }
      
    
        resolve({ code: 200, data: result });
      });
    
    const getById = (id) =>
      new Promise((resolve) => {
        const country = countries.find((country) => country.id === id);
    
        if (country) {
          resolve({ code: 200, data: country });
        } else {
          resolve({
            code: 404,
            data: { message: `No country found for id ${id}` },
          });
        }
      });
    
    module.exports = {
      getAll,
      getById,
    };
    
    },{"../data/countries":2}],2:[function(require,module,exports){
    module.exports=[{"id":1,"first_name":"Danya","last_name":"Pardy","email":"dpardy0@liveinternet.ru","gender":"Male","ip_address":"35.30.117.41","country":"Tunisia"},
    {"id":2,"first_name":"Dorri","last_name":"Callar","email":"dcallar1@patch.com","gender":"Female","ip_address":"37.33.80.11","country":"Greece"},
    {"id":3,"first_name":"Cull","last_name":"Worstall","email":"cworstall2@google.ru","gender":"Male","ip_address":"34.179.55.60","country":"Nigeria"},
    {"id":4,"first_name":"Gearard","last_name":"Reilinger","email":"greilinger3@storify.com","gender":"Male","ip_address":"43.207.29.248","country":"Philippines","postal_code":"7039"},
    {"id":5,"first_name":"Oona","last_name":"Waye","email":"owaye4@reuters.com","gender":"Female","ip_address":"1.85.1.255","country":"United States","postal_code":"15266"},
    {"id":6,"first_name":"Stillman","last_name":"Gossipin","email":"sgossipin5@homestead.com","gender":"Male","ip_address":"217.154.226.82","country":"Myanmar"},
    {"id":7,"first_name":"Ashton","last_name":"Hynam","email":"ahynam6@ted.com","gender":"Male","ip_address":"238.143.73.55","country":"Indonesia"},
    {"id":8,"first_name":"Clem","last_name":"Junkin","email":"cjunkin7@icio.us","gender":"Female","ip_address":"120.145.18.177","country":"Brazil","postal_code":"18730-000"},
    {"id":9,"first_name":"Caroljean","last_name":"Ertelt","email":"certelt8@phpbb.com","gender":"Female","ip_address":"47.14.169.194","country":"China"},
    {"id":10,"first_name":"Evangeline","last_name":"Delooze","email":"edelooze9@toplist.cz","gender":"Female","ip_address":"117.16.208.105","country":"Russia","postal_code":"694062"},
    {"id":11,"first_name":"Kamillah","last_name":"Gunston","email":"kgunstona@eventbrite.com","gender":"Female","ip_address":"150.184.37.219","country":"China"},
    {"id":12,"first_name":"Alexis","last_name":"Tilne","email":"atilneb@census.gov","gender":"Female","ip_address":"55.87.183.61","country":"Ukraine"},
    {"id":13,"first_name":"Curtis","last_name":"Huby","email":"chubyc@people.com.cn","gender":"Male","ip_address":"170.202.197.30","country":"United States","postal_code":"20420"},
    {"id":14,"first_name":"Esdras","last_name":"Dewicke","email":"edewicked@businesswire.com","gender":"Male","ip_address":"20.174.136.196","country":"Philippines","postal_code":"2910"},
    {"id":15,"first_name":"Ingram","last_name":"Longbottom","email":"ilongbottome@timesonline.co.uk","gender":"Genderfluid","ip_address":"248.31.38.0","country":"Russia","postal_code":"624577"},
    {"id":16,"first_name":"Drusilla","last_name":"Scarsbrick","email":"dscarsbrickf@tinypic.com","gender":"Female","ip_address":"210.135.212.94","country":"Sweden","postal_code":"791 96"},
    {"id":17,"first_name":"Tillie","last_name":"McTeggart","email":"tmcteggartg@meetup.com","gender":"Female","ip_address":"44.59.159.159","country":"China"},
    {"id":18,"first_name":"Alfy","last_name":"Worham","email":"aworhamh@npr.org","gender":"Female","ip_address":"226.12.29.241","country":"Russia","postal_code":"303370"},
    {"id":19,"first_name":"Cristiano","last_name":"Birchwood","email":"cbirchwoodi@domainmarket.com","gender":"Male","ip_address":"67.159.208.108","country":"Morocco"},
    {"id":20,"first_name":"Salomone","last_name":"Aliberti","email":"salibertij@harvard.edu","gender":"Male","ip_address":"132.179.203.181","country":"Indonesia"},
    {"id":21,"first_name":"Linnea","last_name":"Rathke","email":"lrathkek@a8.net","gender":"Female","ip_address":"166.34.10.238","country":"China"},
    {"id":22,"first_name":"Laina","last_name":"Iacobucci","email":"liacobuccil@oakley.com","gender":"Female","ip_address":"154.224.98.17","country":"Indonesia"},
    {"id":23,"first_name":"Gabe","last_name":"Somerton","email":"gsomertonm@studiopress.com","gender":"Male","ip_address":"136.209.36.235","country":"Vietnam"},
    {"id":24,"first_name":"Shanan","last_name":"Mangion","email":"smangionn@behance.net","gender":"Male","ip_address":"211.213.33.127","country":"Panama"},
    {"id":25,"first_name":"Hazel","last_name":"Gustus","email":"hgustuso@joomla.org","gender":"Female","ip_address":"137.152.118.97","country":"Iraq"},
    {"id":26,"first_name":"Humfried","last_name":"Sher","email":"hsherp@weebly.com","gender":"Male","ip_address":"46.202.23.43","country":"North Korea"},
    {"id":27,"first_name":"Kelly","last_name":"Biggadyke","email":"kbiggadykeq@google.ca","gender":"Male","ip_address":"69.183.160.188","country":"Indonesia"},
    {"id":28,"first_name":"Pat","last_name":"Giffen","email":"pgiffenr@cargocollective.com","gender":"Male","ip_address":"248.55.1.118","country":"Kyrgyzstan"},
    {"id":29,"first_name":"Guy","last_name":"Jellyman","email":"gjellymans@webnode.com","gender":"Male","ip_address":"106.88.40.241","country":"Papua New Guinea"},
    {"id":30,"first_name":"Forester","last_name":"Woofenden","email":"fwoofendent@nbcnews.com","gender":"Male","ip_address":"227.164.49.98","country":"Greece"},
    {"id":31,"first_name":"Kareem","last_name":"Blackstone","email":"kblackstoneu@foxnews.com","gender":"Polygender","ip_address":"252.63.171.161","country":"China"},
    {"id":32,"first_name":"Levi","last_name":"Langlands","email":"llanglandsv@acquirethisname.com","gender":"Male","ip_address":"12.217.111.4","country":"Indonesia"},
    {"id":33,"first_name":"Hymie","last_name":"Bridell","email":"hbridellw@abc.net.au","gender":"Male","ip_address":"39.98.140.126","country":"Bulgaria","postal_code":"8216"},
    {"id":34,"first_name":"Karney","last_name":"Blanchflower","email":"kblanchflowerx@miitbeian.gov.cn","gender":"Male","ip_address":"187.253.185.150","country":"Greece"},
    {"id":35,"first_name":"Grady","last_name":"Chessun","email":"gchessuny@washington.edu","gender":"Male","ip_address":"10.152.178.244","country":"Comoros"},
    {"id":36,"first_name":"Flo","last_name":"Ondricek","email":"fondricekz@mac.com","gender":"Female","ip_address":"66.160.72.42","country":"Indonesia"},
    {"id":37,"first_name":"Quinta","last_name":"Coddrington","email":"qcoddrington10@amazonaws.com","gender":"Female","ip_address":"199.185.224.225","country":"Ukraine"},
    {"id":38,"first_name":"Fabio","last_name":"Alelsandrowicz","email":"falelsandrowicz11@icq.com","gender":"Male","ip_address":"199.230.4.83","country":"Indonesia"},
    {"id":39,"first_name":"Eolande","last_name":"Forri","email":"eforri12@icio.us","gender":"Female","ip_address":"181.15.69.142","country":"France","postal_code":"44911 CEDEX 9"},
    {"id":40,"first_name":"Linet","last_name":"Elsby","email":"lelsby13@nih.gov","gender":"Female","ip_address":"9.68.33.27","country":"China"},
    {"id":41,"first_name":"Cammie","last_name":"Giorgiutti","email":"cgiorgiutti14@mozilla.org","gender":"Female","ip_address":"197.147.68.195","country":"Japan","postal_code":"305-0028"},
    {"id":42,"first_name":"Wayland","last_name":"Lias","email":"wlias15@xrea.com","gender":"Male","ip_address":"129.167.161.86","country":"Russia","postal_code":"433201"},
    {"id":43,"first_name":"Marthe","last_name":"Hanalan","email":"mhanalan16@mtv.com","gender":"Female","ip_address":"235.44.160.38","country":"Cuba"},
    {"id":44,"first_name":"Hilly","last_name":"Baldock","email":"hbaldock17@xinhuanet.com","gender":"Male","ip_address":"117.86.90.63","country":"Indonesia"},
    {"id":45,"first_name":"Keslie","last_name":"Gut","email":"kgut18@tumblr.com","gender":"Female","ip_address":"13.165.47.32","country":"Czech Republic","postal_code":"742 83"},
    {"id":46,"first_name":"Bogart","last_name":"Rubega","email":"brubega19@indiegogo.com","gender":"Male","ip_address":"163.204.44.19","country":"China"},
    {"id":47,"first_name":"Chrissie","last_name":"Moxley","email":"cmoxley1a@t-online.de","gender":"Male","ip_address":"66.111.114.81","country":"Brazil","postal_code":"97540-000"},
    {"id":48,"first_name":"Meade","last_name":"Lambotin","email":"mlambotin1b@elpais.com","gender":"Male","ip_address":"203.16.196.125","country":"China"},
    {"id":49,"first_name":"Trudy","last_name":"Leverton","email":"tleverton1c@ow.ly","gender":"Female","ip_address":"42.196.118.215","country":"Portugal","postal_code":"8800-114"},
    {"id":50,"first_name":"Thurston","last_name":"Dupey","email":"tdupey1d@state.gov","gender":"Male","ip_address":"142.3.136.201","country":"China"},
    {"id":51,"first_name":"Berky","last_name":"Woffenden","email":"bwoffenden1e@google.es","gender":"Male","ip_address":"198.48.24.122","country":"Zambia"},
    {"id":52,"first_name":"Paola","last_name":"Brenard","email":"pbrenard1f@webeden.co.uk","gender":"Female","ip_address":"127.63.137.132","country":"China"},
    {"id":53,"first_name":"Katrina","last_name":"Denziloe","email":"kdenziloe1g@de.vu","gender":"Female","ip_address":"225.94.242.21","country":"Poland","postal_code":"46-090"},
    {"id":54,"first_name":"Haley","last_name":"Cantwell","email":"hcantwell1h@technorati.com","gender":"Bigender","ip_address":"123.135.220.160","country":"Thailand","postal_code":"10160"},
    {"id":55,"first_name":"Melli","last_name":"Headey","email":"mheadey1i@tripadvisor.com","gender":"Female","ip_address":"46.53.248.209","country":"South Korea"},
    {"id":56,"first_name":"Aldus","last_name":"Wetherick","email":"awetherick1j@printfriendly.com","gender":"Male","ip_address":"78.218.70.214","country":"South Africa","postal_code":"8445"},
    {"id":57,"first_name":"Moe","last_name":"Pendergrast","email":"mpendergrast1k@wikimedia.org","gender":"Male","ip_address":"54.121.234.160","country":"Denmark","postal_code":"1917"},
    {"id":58,"first_name":"Sabra","last_name":"Fripp","email":"sfripp1l@goo.gl","gender":"Female","ip_address":"192.71.84.160","country":"United States","postal_code":"76796"},
    {"id":59,"first_name":"Natassia","last_name":"Pietz","email":"npietz1m@mediafire.com","gender":"Female","ip_address":"15.110.100.56","country":"Philippines","postal_code":"5507"},
    {"id":60,"first_name":"Brennan","last_name":"Fraczkiewicz","email":"bfraczkiewicz1n@posterous.com","gender":"Male","ip_address":"66.12.215.191","country":"Dominica"},
    {"id":61,"first_name":"Chic","last_name":"Budd","email":"cbudd1o@people.com.cn","gender":"Polygender","ip_address":"6.167.237.191","country":"Paraguay"},
    {"id":62,"first_name":"Waldemar","last_name":"Korba","email":"wkorba1p@icq.com","gender":"Male","ip_address":"92.68.89.194","country":"Indonesia"},
    {"id":63,"first_name":"Harley","last_name":"Simacek","email":"hsimacek1q@homestead.com","gender":"Female","ip_address":"1.200.251.188","country":"China"},
    {"id":64,"first_name":"Dennie","last_name":"Randalson","email":"drandalson1r@si.edu","gender":"Male","ip_address":"101.154.237.42","country":"Sweden","postal_code":"831 37"},
    {"id":65,"first_name":"Stan","last_name":"Guiness","email":"sguiness1s@networkadvertising.org","gender":"Male","ip_address":"90.182.84.20","country":"China"},
    {"id":66,"first_name":"Hank","last_name":"Bew","email":"hbew1t@columbia.edu","gender":"Male","ip_address":"64.131.3.142","country":"China"},
    {"id":67,"first_name":"Thoma","last_name":"Camocke","email":"tcamocke1u@google.it","gender":"Male","ip_address":"17.20.135.16","country":"Tanzania"},
    {"id":68,"first_name":"Tony","last_name":"Langford","email":"tlangford1v@statcounter.com","gender":"Female","ip_address":"60.128.189.115","country":"Costa Rica","postal_code":"21001"},
    {"id":69,"first_name":"Hinze","last_name":"Deabill","email":"hdeabill1w@theguardian.com","gender":"Male","ip_address":"71.169.175.123","country":"Canada","postal_code":"E8K"},
    {"id":70,"first_name":"Danita","last_name":"Tumielli","email":"dtumielli1x@php.net","gender":"Female","ip_address":"252.193.146.45","country":"Sweden","postal_code":"453 41"},
    {"id":71,"first_name":"Lester","last_name":"Ganny","email":"lganny1y@kickstarter.com","gender":"Male","ip_address":"52.78.195.121","country":"Sweden","postal_code":"792 92"},
    {"id":72,"first_name":"Ambros","last_name":"Wrigglesworth","email":"awrigglesworth1z@scribd.com","gender":"Male","ip_address":"18.116.95.137","country":"China"},
    {"id":73,"first_name":"Amber","last_name":"Grieves","email":"agrieves20@issuu.com","gender":"Female","ip_address":"152.198.203.173","country":"China"},
    {"id":74,"first_name":"Blane","last_name":"Dohms","email":"bdohms21@harvard.edu","gender":"Male","ip_address":"158.143.56.5","country":"Portugal","postal_code":"4755-192"},
    {"id":75,"first_name":"Ezequiel","last_name":"Jindacek","email":"ejindacek22@vistaprint.com","gender":"Male","ip_address":"116.174.6.103","country":"China"},
    {"id":76,"first_name":"Corey","last_name":"Graeme","email":"cgraeme23@ameblo.jp","gender":"Male","ip_address":"45.176.92.194","country":"Russia","postal_code":"678126"},
    {"id":77,"first_name":"Marga","last_name":"Pudner","email":"mpudner24@flickr.com","gender":"Female","ip_address":"148.255.187.44","country":"Germany","postal_code":"04317"},
    {"id":78,"first_name":"Latashia","last_name":"Huscroft","email":"lhuscroft25@netscape.com","gender":"Female","ip_address":"208.206.225.15","country":"Peru"},
    {"id":79,"first_name":"Meir","last_name":"Guerro","email":"mguerro26@economist.com","gender":"Male","ip_address":"232.16.207.45","country":"Sudan"},
    {"id":80,"first_name":"Phaedra","last_name":"Allsep","email":"pallsep27@nymag.com","gender":"Female","ip_address":"29.80.133.186","country":"Poland","postal_code":"23-302"},
    {"id":81,"first_name":"Onfroi","last_name":"Adie","email":"oadie28@theatlantic.com","gender":"Male","ip_address":"123.62.162.230","country":"Indonesia"},
    {"id":82,"first_name":"Octavia","last_name":"Atkins","email":"oatkins29@wikia.com","gender":"Female","ip_address":"180.131.147.19","country":"United States","postal_code":"85705"},
    {"id":83,"first_name":"Wayne","last_name":"Leetham","email":"wleetham2a@usatoday.com","gender":"Male","ip_address":"37.138.18.159","country":"Russia","postal_code":"301649"},
    {"id":84,"first_name":"Tony","last_name":"Maddinon","email":"tmaddinon2b@woothemes.com","gender":"Male","ip_address":"124.80.181.189","country":"Myanmar"},
    {"id":85,"first_name":"Quentin","last_name":"Eldritt","email":"qeldritt2c@elegantthemes.com","gender":"Non-binary","ip_address":"150.74.206.185","country":"Indonesia"},
    {"id":86,"first_name":"Natty","last_name":"Pauls","email":"npauls2d@twitpic.com","gender":"Male","ip_address":"20.220.37.155","country":"France","postal_code":"57052 CEDEX 02"},
    {"id":87,"first_name":"Mortimer","last_name":"Bouskill","email":"mbouskill2e@clickbank.net","gender":"Male","ip_address":"1.207.122.244","country":"Iran"},
    {"id":88,"first_name":"West","last_name":"Kinnear","email":"wkinnear2f@tinyurl.com","gender":"Male","ip_address":"123.42.170.196","country":"Indonesia"},
    {"id":89,"first_name":"Vidovik","last_name":"Di Giorgio","email":"vdigiorgio2g@wix.com","gender":"Male","ip_address":"232.16.228.42","country":"Sweden","postal_code":"432 30"},
    {"id":90,"first_name":"Donna","last_name":"Clement","email":"dclement2h@issuu.com","gender":"Female","ip_address":"58.82.144.125","country":"France","postal_code":"77614 CEDEX 3"},
    {"id":91,"first_name":"Sheppard","last_name":"Leming","email":"sleming2i@ocn.ne.jp","gender":"Male","ip_address":"133.179.150.124","country":"Cameroon"},
    {"id":92,"first_name":"Gregor","last_name":"Schiersch","email":"gschiersch2j@shareasale.com","gender":"Male","ip_address":"75.131.214.51","country":"Czech Republic","postal_code":"561 56"},
    {"id":93,"first_name":"Kimberley","last_name":"Levee","email":"klevee2k@reddit.com","gender":"Bigender","ip_address":"28.74.140.239","country":"Pakistan","postal_code":"73061"},
    {"id":94,"first_name":"Filberte","last_name":"Bromont","email":"fbromont2l@hostgator.com","gender":"Male","ip_address":"219.110.98.221","country":"Slovenia","postal_code":"5297"},
    {"id":95,"first_name":"Paulette","last_name":"Roft","email":"proft2m@1und1.de","gender":"Female","ip_address":"86.172.114.104","country":"Benin"},
    {"id":96,"first_name":"Oralie","last_name":"Kynder","email":"okynder2n@phoca.cz","gender":"Bigender","ip_address":"85.102.187.42","country":"Sri Lanka","postal_code":"00100"},
    {"id":97,"first_name":"Worthington","last_name":"Shew","email":"wshew2o@over-blog.com","gender":"Male","ip_address":"216.56.240.56","country":"Azerbaijan"},
    {"id":98,"first_name":"Huey","last_name":"Snarr","email":"hsnarr2p@123-reg.co.uk","gender":"Male","ip_address":"199.67.228.7","country":"Colombia","postal_code":"181019"},
    {"id":99,"first_name":"Dori","last_name":"Dana","email":"ddana2q@dot.gov","gender":"Genderfluid","ip_address":"124.201.91.59","country":"Cuba"},
    {"id":100,"first_name":"Mufi","last_name":"Dibden","email":"mdibden2r@scientificamerican.com","gender":"Female","ip_address":"236.147.75.138","country":"Ukraine"}]
    
    },{}],3:[function(require,module,exports){
    const { getAll } = require(".assignment.js");
    
    const renderTable = (data, nameTerm) => {
      const tableBody = document.getElementById("table-main");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
    
      let source = data;
    
      if (nameTerm) {
        source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
      }
    
      const rows = source.reduce(
        (acc, { id, name, description, price }) =>
          acc +
          `<tr>
      <td>${id}</td><td>${first_name}</td>
      <td>${last_name}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td>${ip_address}</td>
      <td>${postal_code}</td>
      <td>${country}</td></tr>`,
    ``
      );
    
      tableBody.innerHTML = rows;
    };
    
    getAll().then(({ data }) => renderTable(data));
    
    const onSubmit = (event) => {
      event.preventDefault();
    
      const term = event.target.name.value;
    
      getAll().then(({ data }) => renderTable(data, term));
    };
    
    const onReset = () => {
      getAll().then(({ data }) => renderTable(data));
    };
    
    },{".assignment.js":1}]},{},[3]);
    (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
        const countries = require("./assignment");
        
        const getAll = ({ id, first_name, last_name, email, gender, ip_address, country, postal_code  } = {}) =>
          new Promise((resolve) => {
            let result = Array.from(countries);
        
            if (id) {
              result = result.filter((item) => item.id === id);
            }
        
            if (first_name) {
              result = result.filter((item) => item.first_name === first_name);
            }
        
            if (last_name) {
              result = result.filter((item) => item.last_name === last_name);
            }
        
            if (email) {
                result = result.filter((item) => item.email === email);
              }
              if (gender) {
                result = result.filter((item) => item.gender === gender);
              }
              if (ip_address) {
                result = result.filter((item) => item.ip_address === ip_address);
              }
              if (country) {
                result = result.filter((item) => item.country === country);
              }
              if (postal_code) {
                result = result.filter((item) => item.postal_code === postal_code);
              }
          
        
            resolve({ code: 200, data: result });
          });
        
        const getById = (id) =>
          new Promise((resolve) => {
            const country = countries.find((country) => country.id === id);
        
            if (country) {
              resolve({ code: 200, data: country });
            } else {
              resolve({
                code: 404,
                data: { message: `No country found for id ${id}` },
              });
            }
          });
        
        module.exports = {
          getAll,
          getById,
        };
        
        },{"../data/countries":2}],2:[function(require,module,exports){
        module.exports=[{"id":1,"first_name":"Danya","last_name":"Pardy","email":"dpardy0@liveinternet.ru","gender":"Male","ip_address":"35.30.117.41","country":"Tunisia"},
        {"id":2,"first_name":"Dorri","last_name":"Callar","email":"dcallar1@patch.com","gender":"Female","ip_address":"37.33.80.11","country":"Greece"},
        {"id":3,"first_name":"Cull","last_name":"Worstall","email":"cworstall2@google.ru","gender":"Male","ip_address":"34.179.55.60","country":"Nigeria"},
        {"id":4,"first_name":"Gearard","last_name":"Reilinger","email":"greilinger3@storify.com","gender":"Male","ip_address":"43.207.29.248","country":"Philippines","postal_code":"7039"},
        {"id":5,"first_name":"Oona","last_name":"Waye","email":"owaye4@reuters.com","gender":"Female","ip_address":"1.85.1.255","country":"United States","postal_code":"15266"},
        {"id":6,"first_name":"Stillman","last_name":"Gossipin","email":"sgossipin5@homestead.com","gender":"Male","ip_address":"217.154.226.82","country":"Myanmar"},
        {"id":7,"first_name":"Ashton","last_name":"Hynam","email":"ahynam6@ted.com","gender":"Male","ip_address":"238.143.73.55","country":"Indonesia"},
        {"id":8,"first_name":"Clem","last_name":"Junkin","email":"cjunkin7@icio.us","gender":"Female","ip_address":"120.145.18.177","country":"Brazil","postal_code":"18730-000"},
        {"id":9,"first_name":"Caroljean","last_name":"Ertelt","email":"certelt8@phpbb.com","gender":"Female","ip_address":"47.14.169.194","country":"China"},
        {"id":10,"first_name":"Evangeline","last_name":"Delooze","email":"edelooze9@toplist.cz","gender":"Female","ip_address":"117.16.208.105","country":"Russia","postal_code":"694062"},
        {"id":11,"first_name":"Kamillah","last_name":"Gunston","email":"kgunstona@eventbrite.com","gender":"Female","ip_address":"150.184.37.219","country":"China"},
        {"id":12,"first_name":"Alexis","last_name":"Tilne","email":"atilneb@census.gov","gender":"Female","ip_address":"55.87.183.61","country":"Ukraine"},
        {"id":13,"first_name":"Curtis","last_name":"Huby","email":"chubyc@people.com.cn","gender":"Male","ip_address":"170.202.197.30","country":"United States","postal_code":"20420"},
        {"id":14,"first_name":"Esdras","last_name":"Dewicke","email":"edewicked@businesswire.com","gender":"Male","ip_address":"20.174.136.196","country":"Philippines","postal_code":"2910"},
        {"id":15,"first_name":"Ingram","last_name":"Longbottom","email":"ilongbottome@timesonline.co.uk","gender":"Genderfluid","ip_address":"248.31.38.0","country":"Russia","postal_code":"624577"},
        {"id":16,"first_name":"Drusilla","last_name":"Scarsbrick","email":"dscarsbrickf@tinypic.com","gender":"Female","ip_address":"210.135.212.94","country":"Sweden","postal_code":"791 96"},
        {"id":17,"first_name":"Tillie","last_name":"McTeggart","email":"tmcteggartg@meetup.com","gender":"Female","ip_address":"44.59.159.159","country":"China"},
        {"id":18,"first_name":"Alfy","last_name":"Worham","email":"aworhamh@npr.org","gender":"Female","ip_address":"226.12.29.241","country":"Russia","postal_code":"303370"},
        {"id":19,"first_name":"Cristiano","last_name":"Birchwood","email":"cbirchwoodi@domainmarket.com","gender":"Male","ip_address":"67.159.208.108","country":"Morocco"},
        {"id":20,"first_name":"Salomone","last_name":"Aliberti","email":"salibertij@harvard.edu","gender":"Male","ip_address":"132.179.203.181","country":"Indonesia"},
        {"id":21,"first_name":"Linnea","last_name":"Rathke","email":"lrathkek@a8.net","gender":"Female","ip_address":"166.34.10.238","country":"China"},
        {"id":22,"first_name":"Laina","last_name":"Iacobucci","email":"liacobuccil@oakley.com","gender":"Female","ip_address":"154.224.98.17","country":"Indonesia"},
        {"id":23,"first_name":"Gabe","last_name":"Somerton","email":"gsomertonm@studiopress.com","gender":"Male","ip_address":"136.209.36.235","country":"Vietnam"},
        {"id":24,"first_name":"Shanan","last_name":"Mangion","email":"smangionn@behance.net","gender":"Male","ip_address":"211.213.33.127","country":"Panama"},
        {"id":25,"first_name":"Hazel","last_name":"Gustus","email":"hgustuso@joomla.org","gender":"Female","ip_address":"137.152.118.97","country":"Iraq"},
        {"id":26,"first_name":"Humfried","last_name":"Sher","email":"hsherp@weebly.com","gender":"Male","ip_address":"46.202.23.43","country":"North Korea"},
        {"id":27,"first_name":"Kelly","last_name":"Biggadyke","email":"kbiggadykeq@google.ca","gender":"Male","ip_address":"69.183.160.188","country":"Indonesia"},
        {"id":28,"first_name":"Pat","last_name":"Giffen","email":"pgiffenr@cargocollective.com","gender":"Male","ip_address":"248.55.1.118","country":"Kyrgyzstan"},
        {"id":29,"first_name":"Guy","last_name":"Jellyman","email":"gjellymans@webnode.com","gender":"Male","ip_address":"106.88.40.241","country":"Papua New Guinea"},
        {"id":30,"first_name":"Forester","last_name":"Woofenden","email":"fwoofendent@nbcnews.com","gender":"Male","ip_address":"227.164.49.98","country":"Greece"},
        {"id":31,"first_name":"Kareem","last_name":"Blackstone","email":"kblackstoneu@foxnews.com","gender":"Polygender","ip_address":"252.63.171.161","country":"China"},
        {"id":32,"first_name":"Levi","last_name":"Langlands","email":"llanglandsv@acquirethisname.com","gender":"Male","ip_address":"12.217.111.4","country":"Indonesia"},
        {"id":33,"first_name":"Hymie","last_name":"Bridell","email":"hbridellw@abc.net.au","gender":"Male","ip_address":"39.98.140.126","country":"Bulgaria","postal_code":"8216"},
        {"id":34,"first_name":"Karney","last_name":"Blanchflower","email":"kblanchflowerx@miitbeian.gov.cn","gender":"Male","ip_address":"187.253.185.150","country":"Greece"},
        {"id":35,"first_name":"Grady","last_name":"Chessun","email":"gchessuny@washington.edu","gender":"Male","ip_address":"10.152.178.244","country":"Comoros"},
        {"id":36,"first_name":"Flo","last_name":"Ondricek","email":"fondricekz@mac.com","gender":"Female","ip_address":"66.160.72.42","country":"Indonesia"},
        {"id":37,"first_name":"Quinta","last_name":"Coddrington","email":"qcoddrington10@amazonaws.com","gender":"Female","ip_address":"199.185.224.225","country":"Ukraine"},
        {"id":38,"first_name":"Fabio","last_name":"Alelsandrowicz","email":"falelsandrowicz11@icq.com","gender":"Male","ip_address":"199.230.4.83","country":"Indonesia"},
        {"id":39,"first_name":"Eolande","last_name":"Forri","email":"eforri12@icio.us","gender":"Female","ip_address":"181.15.69.142","country":"France","postal_code":"44911 CEDEX 9"},
        {"id":40,"first_name":"Linet","last_name":"Elsby","email":"lelsby13@nih.gov","gender":"Female","ip_address":"9.68.33.27","country":"China"},
        {"id":41,"first_name":"Cammie","last_name":"Giorgiutti","email":"cgiorgiutti14@mozilla.org","gender":"Female","ip_address":"197.147.68.195","country":"Japan","postal_code":"305-0028"},
        {"id":42,"first_name":"Wayland","last_name":"Lias","email":"wlias15@xrea.com","gender":"Male","ip_address":"129.167.161.86","country":"Russia","postal_code":"433201"},
        {"id":43,"first_name":"Marthe","last_name":"Hanalan","email":"mhanalan16@mtv.com","gender":"Female","ip_address":"235.44.160.38","country":"Cuba"},
        {"id":44,"first_name":"Hilly","last_name":"Baldock","email":"hbaldock17@xinhuanet.com","gender":"Male","ip_address":"117.86.90.63","country":"Indonesia"},
        {"id":45,"first_name":"Keslie","last_name":"Gut","email":"kgut18@tumblr.com","gender":"Female","ip_address":"13.165.47.32","country":"Czech Republic","postal_code":"742 83"},
        {"id":46,"first_name":"Bogart","last_name":"Rubega","email":"brubega19@indiegogo.com","gender":"Male","ip_address":"163.204.44.19","country":"China"},
        {"id":47,"first_name":"Chrissie","last_name":"Moxley","email":"cmoxley1a@t-online.de","gender":"Male","ip_address":"66.111.114.81","country":"Brazil","postal_code":"97540-000"},
        {"id":48,"first_name":"Meade","last_name":"Lambotin","email":"mlambotin1b@elpais.com","gender":"Male","ip_address":"203.16.196.125","country":"China"},
        {"id":49,"first_name":"Trudy","last_name":"Leverton","email":"tleverton1c@ow.ly","gender":"Female","ip_address":"42.196.118.215","country":"Portugal","postal_code":"8800-114"},
        {"id":50,"first_name":"Thurston","last_name":"Dupey","email":"tdupey1d@state.gov","gender":"Male","ip_address":"142.3.136.201","country":"China"},
        {"id":51,"first_name":"Berky","last_name":"Woffenden","email":"bwoffenden1e@google.es","gender":"Male","ip_address":"198.48.24.122","country":"Zambia"},
        {"id":52,"first_name":"Paola","last_name":"Brenard","email":"pbrenard1f@webeden.co.uk","gender":"Female","ip_address":"127.63.137.132","country":"China"},
        {"id":53,"first_name":"Katrina","last_name":"Denziloe","email":"kdenziloe1g@de.vu","gender":"Female","ip_address":"225.94.242.21","country":"Poland","postal_code":"46-090"},
        {"id":54,"first_name":"Haley","last_name":"Cantwell","email":"hcantwell1h@technorati.com","gender":"Bigender","ip_address":"123.135.220.160","country":"Thailand","postal_code":"10160"},
        {"id":55,"first_name":"Melli","last_name":"Headey","email":"mheadey1i@tripadvisor.com","gender":"Female","ip_address":"46.53.248.209","country":"South Korea"},
        {"id":56,"first_name":"Aldus","last_name":"Wetherick","email":"awetherick1j@printfriendly.com","gender":"Male","ip_address":"78.218.70.214","country":"South Africa","postal_code":"8445"},
        {"id":57,"first_name":"Moe","last_name":"Pendergrast","email":"mpendergrast1k@wikimedia.org","gender":"Male","ip_address":"54.121.234.160","country":"Denmark","postal_code":"1917"},
        {"id":58,"first_name":"Sabra","last_name":"Fripp","email":"sfripp1l@goo.gl","gender":"Female","ip_address":"192.71.84.160","country":"United States","postal_code":"76796"},
        {"id":59,"first_name":"Natassia","last_name":"Pietz","email":"npietz1m@mediafire.com","gender":"Female","ip_address":"15.110.100.56","country":"Philippines","postal_code":"5507"},
        {"id":60,"first_name":"Brennan","last_name":"Fraczkiewicz","email":"bfraczkiewicz1n@posterous.com","gender":"Male","ip_address":"66.12.215.191","country":"Dominica"},
        {"id":61,"first_name":"Chic","last_name":"Budd","email":"cbudd1o@people.com.cn","gender":"Polygender","ip_address":"6.167.237.191","country":"Paraguay"},
        {"id":62,"first_name":"Waldemar","last_name":"Korba","email":"wkorba1p@icq.com","gender":"Male","ip_address":"92.68.89.194","country":"Indonesia"},
        {"id":63,"first_name":"Harley","last_name":"Simacek","email":"hsimacek1q@homestead.com","gender":"Female","ip_address":"1.200.251.188","country":"China"},
        {"id":64,"first_name":"Dennie","last_name":"Randalson","email":"drandalson1r@si.edu","gender":"Male","ip_address":"101.154.237.42","country":"Sweden","postal_code":"831 37"},
        {"id":65,"first_name":"Stan","last_name":"Guiness","email":"sguiness1s@networkadvertising.org","gender":"Male","ip_address":"90.182.84.20","country":"China"},
        {"id":66,"first_name":"Hank","last_name":"Bew","email":"hbew1t@columbia.edu","gender":"Male","ip_address":"64.131.3.142","country":"China"},
        {"id":67,"first_name":"Thoma","last_name":"Camocke","email":"tcamocke1u@google.it","gender":"Male","ip_address":"17.20.135.16","country":"Tanzania"},
        {"id":68,"first_name":"Tony","last_name":"Langford","email":"tlangford1v@statcounter.com","gender":"Female","ip_address":"60.128.189.115","country":"Costa Rica","postal_code":"21001"},
        {"id":69,"first_name":"Hinze","last_name":"Deabill","email":"hdeabill1w@theguardian.com","gender":"Male","ip_address":"71.169.175.123","country":"Canada","postal_code":"E8K"},
        {"id":70,"first_name":"Danita","last_name":"Tumielli","email":"dtumielli1x@php.net","gender":"Female","ip_address":"252.193.146.45","country":"Sweden","postal_code":"453 41"},
        {"id":71,"first_name":"Lester","last_name":"Ganny","email":"lganny1y@kickstarter.com","gender":"Male","ip_address":"52.78.195.121","country":"Sweden","postal_code":"792 92"},
        {"id":72,"first_name":"Ambros","last_name":"Wrigglesworth","email":"awrigglesworth1z@scribd.com","gender":"Male","ip_address":"18.116.95.137","country":"China"},
        {"id":73,"first_name":"Amber","last_name":"Grieves","email":"agrieves20@issuu.com","gender":"Female","ip_address":"152.198.203.173","country":"China"},
        {"id":74,"first_name":"Blane","last_name":"Dohms","email":"bdohms21@harvard.edu","gender":"Male","ip_address":"158.143.56.5","country":"Portugal","postal_code":"4755-192"},
        {"id":75,"first_name":"Ezequiel","last_name":"Jindacek","email":"ejindacek22@vistaprint.com","gender":"Male","ip_address":"116.174.6.103","country":"China"},
        {"id":76,"first_name":"Corey","last_name":"Graeme","email":"cgraeme23@ameblo.jp","gender":"Male","ip_address":"45.176.92.194","country":"Russia","postal_code":"678126"},
        {"id":77,"first_name":"Marga","last_name":"Pudner","email":"mpudner24@flickr.com","gender":"Female","ip_address":"148.255.187.44","country":"Germany","postal_code":"04317"},
        {"id":78,"first_name":"Latashia","last_name":"Huscroft","email":"lhuscroft25@netscape.com","gender":"Female","ip_address":"208.206.225.15","country":"Peru"},
        {"id":79,"first_name":"Meir","last_name":"Guerro","email":"mguerro26@economist.com","gender":"Male","ip_address":"232.16.207.45","country":"Sudan"},
        {"id":80,"first_name":"Phaedra","last_name":"Allsep","email":"pallsep27@nymag.com","gender":"Female","ip_address":"29.80.133.186","country":"Poland","postal_code":"23-302"},
        {"id":81,"first_name":"Onfroi","last_name":"Adie","email":"oadie28@theatlantic.com","gender":"Male","ip_address":"123.62.162.230","country":"Indonesia"},
        {"id":82,"first_name":"Octavia","last_name":"Atkins","email":"oatkins29@wikia.com","gender":"Female","ip_address":"180.131.147.19","country":"United States","postal_code":"85705"},
        {"id":83,"first_name":"Wayne","last_name":"Leetham","email":"wleetham2a@usatoday.com","gender":"Male","ip_address":"37.138.18.159","country":"Russia","postal_code":"301649"},
        {"id":84,"first_name":"Tony","last_name":"Maddinon","email":"tmaddinon2b@woothemes.com","gender":"Male","ip_address":"124.80.181.189","country":"Myanmar"},
        {"id":85,"first_name":"Quentin","last_name":"Eldritt","email":"qeldritt2c@elegantthemes.com","gender":"Non-binary","ip_address":"150.74.206.185","country":"Indonesia"},
        {"id":86,"first_name":"Natty","last_name":"Pauls","email":"npauls2d@twitpic.com","gender":"Male","ip_address":"20.220.37.155","country":"France","postal_code":"57052 CEDEX 02"},
        {"id":87,"first_name":"Mortimer","last_name":"Bouskill","email":"mbouskill2e@clickbank.net","gender":"Male","ip_address":"1.207.122.244","country":"Iran"},
        {"id":88,"first_name":"West","last_name":"Kinnear","email":"wkinnear2f@tinyurl.com","gender":"Male","ip_address":"123.42.170.196","country":"Indonesia"},
        {"id":89,"first_name":"Vidovik","last_name":"Di Giorgio","email":"vdigiorgio2g@wix.com","gender":"Male","ip_address":"232.16.228.42","country":"Sweden","postal_code":"432 30"},
        {"id":90,"first_name":"Donna","last_name":"Clement","email":"dclement2h@issuu.com","gender":"Female","ip_address":"58.82.144.125","country":"France","postal_code":"77614 CEDEX 3"},
        {"id":91,"first_name":"Sheppard","last_name":"Leming","email":"sleming2i@ocn.ne.jp","gender":"Male","ip_address":"133.179.150.124","country":"Cameroon"},
        {"id":92,"first_name":"Gregor","last_name":"Schiersch","email":"gschiersch2j@shareasale.com","gender":"Male","ip_address":"75.131.214.51","country":"Czech Republic","postal_code":"561 56"},
        {"id":93,"first_name":"Kimberley","last_name":"Levee","email":"klevee2k@reddit.com","gender":"Bigender","ip_address":"28.74.140.239","country":"Pakistan","postal_code":"73061"},
        {"id":94,"first_name":"Filberte","last_name":"Bromont","email":"fbromont2l@hostgator.com","gender":"Male","ip_address":"219.110.98.221","country":"Slovenia","postal_code":"5297"},
        {"id":95,"first_name":"Paulette","last_name":"Roft","email":"proft2m@1und1.de","gender":"Female","ip_address":"86.172.114.104","country":"Benin"},
        {"id":96,"first_name":"Oralie","last_name":"Kynder","email":"okynder2n@phoca.cz","gender":"Bigender","ip_address":"85.102.187.42","country":"Sri Lanka","postal_code":"00100"},
        {"id":97,"first_name":"Worthington","last_name":"Shew","email":"wshew2o@over-blog.com","gender":"Male","ip_address":"216.56.240.56","country":"Azerbaijan"},
        {"id":98,"first_name":"Huey","last_name":"Snarr","email":"hsnarr2p@123-reg.co.uk","gender":"Male","ip_address":"199.67.228.7","country":"Colombia","postal_code":"181019"},
        {"id":99,"first_name":"Dori","last_name":"Dana","email":"ddana2q@dot.gov","gender":"Genderfluid","ip_address":"124.201.91.59","country":"Cuba"},
        {"id":100,"first_name":"Mufi","last_name":"Dibden","email":"mdibden2r@scientificamerican.com","gender":"Female","ip_address":"236.147.75.138","country":"Ukraine"}]
        
        },{}],3:[function(require,module,exports){
        const { getAll } = require(".assignment.js");
        
        const renderTable = (data, nameTerm) => {
          const tableBody = document.getElementById("table-main");
        
          if (!tableBody) {
            throw new Error("No table element found");
          }
        
          let source = data;
        
          if (nameTerm) {
            source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
          }
        
          const rows = source.reduce(
            (acc, { id, name, description, price }) =>
              acc +
              `<tr>
          <td>${id}</td><td>${first_name}</td>
          <td>${last_name}</td>
          <td>${email}</td>
          <td>${gender}</td>
          <td>${ip_address}</td>
          <td>${postal_code}</td>
          <td>${country}</td></tr>`,
        ``
          );
        
          tableBody.innerHTML = rows;
        };
        
        getAll().then(({ data }) => renderTable(data));
        
        const onSubmit = (event) => {
          event.preventDefault();
        
          const term = event.target.name.value;
        
          getAll().then(({ data }) => renderTable(data, term));
        };
        
        const onReset = () => {
          getAll().then(({ data }) => renderTable(data));
        };
        
        },{".assignment.js":1}]},{},[3]);
        