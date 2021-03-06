(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { getAll, getById } = require("./src/controller/people");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No element found inside the table");
  }

  const rows = data.reduce(
    (acc, { id, name, email }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${name}</td><td>${email}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;

  getAll({
    name,
    email,
  }).then(({ data }) => renderTable(data));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

const form = document.getElementById("search-form");

form.addEventListener("submit", onSubmit);
form.addEventListener("reset", onReset);

const onSubmitPersonById = (event) => {
  event.preventDefault();
  const id = event.target.id.value;
  getById(id).then(({ data }) => {
    if (data.message) {
      alert(data.message);
    } else {
      renderTable([data]);
    }
  });
};

const personIdForm = document.getElementById("search-form-id");

personIdForm.addEventListener("submit", onSubmitPersonById);
personIdForm.addEventListener("reset", onReset);
},{"./src/controller/people":2}],2:[function(require,module,exports){
const peopleList = require("../data/MOCK_DATA.json");

const getAll = ({ name, email } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(peopleList);

    if (name) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (email) {
      result = result.filter((item) =>
        item.email.toLowerCase().includes(email.toLowerCase())
      );
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = peopleList.find((person) => {
      return person.id == id;
    });

    if (person) {
      resolve({ code: 200, data: person });
    } else {
      resolve({
        code: 404,
        data: { message: `No person found by this particular id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
},{"../data/MOCK_DATA.json":3}],3:[function(require,module,exports){
module.exports=[{"id":1,"name":"Linnie","email":"lcrielly0@tinyurl.com"},
{"id":2,"name":"Janean","email":"jveeler1@blogtalkradio.com"},
{"id":3,"name":"Marthe","email":"mmclanachan2@mail.ru"},
{"id":4,"name":"Drucy","email":"dvlasin3@flavors.me"},
{"id":5,"name":"Angelique","email":"adudson4@huffingtonpost.com"},
{"id":6,"name":"Mathilde","email":"mdalyell5@state.gov"},
{"id":7,"name":"Iseabal","email":"ipellatt6@springer.com"},
{"id":8,"name":"Antoinette","email":"amoyes7@t.co"},
{"id":9,"name":"Heddie","email":"hthebe8@slate.com"},
{"id":10,"name":"Kassandra","email":"kheinl9@livejournal.com"},
{"id":11,"name":"Fidelity","email":"fmcconnala@shop-pro.jp"},
{"id":12,"name":"Joyous","email":"jsomerledb@opera.com"},
{"id":13,"name":"Francisca","email":"fmckeighanc@hugedomains.com"},
{"id":14,"name":"Bride","email":"brammelld@exblog.jp"},
{"id":15,"name":"Gretta","email":"gemburye@scientificamerican.com"},
{"id":16,"name":"Roseanna","email":"rblachfordf@alexa.com"},
{"id":17,"name":"Agnola","email":"anorcockg@51.la"},
{"id":18,"name":"Maritsa","email":"mtinkerh@behance.net"},
{"id":19,"name":"Eddy","email":"epacei@tinypic.com"},
{"id":20,"name":"Jillane","email":"jmccullouchj@hubpages.com"},
{"id":21,"name":"Dodi","email":"daitonk@geocities.com"},
{"id":22,"name":"Roselia","email":"rlidgleyl@sphinn.com"},
{"id":23,"name":"Kristin","email":"knazarethm@java.com"},
{"id":24,"name":"Danette","email":"dgagann@sina.com.cn"},
{"id":25,"name":"Claudina","email":"cgiberdo@usnews.com"},
{"id":26,"name":"Ula","email":"ucallisp@icio.us"},
{"id":27,"name":"Darci","email":"dclausq@yolasite.com"},
{"id":28,"name":"Maureen","email":"mgarlettr@bizjournals.com"},
{"id":29,"name":"Sibeal","email":"sclorleys@msn.com"},
{"id":30,"name":"Mildrid","email":"mzahort@pagesperso-orange.fr"},
{"id":31,"name":"Agace","email":"anolliu@hatena.ne.jp"},
{"id":32,"name":"Ebba","email":"ebigglestonev@drupal.org"},
{"id":33,"name":"Annemarie","email":"arunciew@wunderground.com"},
{"id":34,"name":"Krissie","email":"kduinkerkx@kickstarter.com"},
{"id":35,"name":"Janenna","email":"jgouldstrawy@mail.ru"},
{"id":36,"name":"Ingaberg","email":"igooldenz@cpanel.net"},
{"id":37,"name":"Jordana","email":"jdougherty10@dailymail.co.uk"},
{"id":38,"name":"Berthe","email":"bfere11@ameblo.jp"},
{"id":39,"name":"Kora","email":"kgerge12@geocities.jp"},
{"id":40,"name":"Lorraine","email":"lolver13@comcast.net"},
{"id":41,"name":"Belicia","email":"bjandl14@dagondesign.com"},
{"id":42,"name":"Joyann","email":"jternouth15@earthlink.net"},
{"id":43,"name":"Sile","email":"sinston16@ted.com"},
{"id":44,"name":"Astra","email":"aodriscole17@technorati.com"},
{"id":45,"name":"Beverlee","email":"bwessell18@163.com"},
{"id":46,"name":"Ariela","email":"aeasseby19@google.pl"},
{"id":47,"name":"Goldarina","email":"gdoherty1a@thetimes.co.uk"},
{"id":48,"name":"Ninnette","email":"ngwalter1b@unblog.fr"},
{"id":49,"name":"Nancey","email":"nfarrah1c@arizona.edu"},
{"id":50,"name":"Jerrilee","email":"jdwyr1d@businessinsider.com"},
{"id":51,"name":"Fara","email":"fsheppey1e@wunderground.com"},
{"id":52,"name":"Nananne","email":"nlove1f@furl.net"},
{"id":53,"name":"Aura","email":"aorknay1g@economist.com"},
{"id":54,"name":"Gracia","email":"gdyble1h@hatena.ne.jp"},
{"id":55,"name":"Cookie","email":"cpenas1i@dropbox.com"},
{"id":56,"name":"Seana","email":"spardoe1j@webmd.com"},
{"id":57,"name":"Nert","email":"nsynan1k@rambler.ru"},
{"id":58,"name":"Astra","email":"alaughren1l@privacy.gov.au"},
{"id":59,"name":"Drucy","email":"drosevear1m@123-reg.co.uk"},
{"id":60,"name":"Carolee","email":"clayson1n@engadget.com"},
{"id":61,"name":"Loleta","email":"lgibbs1o@moonfruit.com"},
{"id":62,"name":"Tansy","email":"tartis1p@imdb.com"},
{"id":63,"name":"Liane","email":"lbrake1q@multiply.com"},
{"id":64,"name":"Jerry","email":"jembra1r@unesco.org"},
{"id":65,"name":"Kylie","email":"kprosek1s@dedecms.com"},
{"id":66,"name":"Bernadine","email":"bveness1t@archive.org"},
{"id":67,"name":"Madge","email":"mlibbis1u@umn.edu"},
{"id":68,"name":"Ernestine","email":"ecarss1v@blinklist.com"},
{"id":69,"name":"Ceciley","email":"ctomalin1w@google.fr"},
{"id":70,"name":"Ange","email":"asebert1x@indiegogo.com"},
{"id":71,"name":"Lindsy","email":"lgiraudy1y@yale.edu"},
{"id":72,"name":"Letitia","email":"lchudleigh1z@elegantthemes.com"},
{"id":73,"name":"Dorolisa","email":"dfilyaev20@wsj.com"},
{"id":74,"name":"Louisa","email":"lrait21@dagondesign.com"},
{"id":75,"name":"Salaidh","email":"shenriet22@soup.io"},
{"id":76,"name":"Nadya","email":"nharring23@phpbb.com"},
{"id":77,"name":"Tabbie","email":"tmcbrady24@cdc.gov"},
{"id":78,"name":"Andi","email":"amaggorini25@eventbrite.com"},
{"id":79,"name":"Leia","email":"laymer26@live.com"},
{"id":80,"name":"Tiffi","email":"tmeldrum27@answers.com"},
{"id":81,"name":"Dyanne","email":"dpawellek28@cornell.edu"},
{"id":82,"name":"Batsheva","email":"babadam29@quantcast.com"},
{"id":83,"name":"Gabbie","email":"ghasnip2a@delicious.com"},
{"id":84,"name":"Meredithe","email":"mreagan2b@mapquest.com"},
{"id":85,"name":"Maryann","email":"mantonellini2c@pinterest.com"},
{"id":86,"name":"Hedda","email":"hhartburn2d@mapquest.com"},
{"id":87,"name":"Grete","email":"gnewe2e@google.ru"},
{"id":88,"name":"Dulce","email":"dmilnthorpe2f@hc360.com"},
{"id":89,"name":"Ondrea","email":"odablin2g@360.cn"},
{"id":90,"name":"Daloris","email":"dattril2h@bravesites.com"},
{"id":91,"name":"Brandi","email":"bdudeney2i@webs.com"},
{"id":92,"name":"Lily","email":"lbradmore2j@prlog.org"},
{"id":93,"name":"Kirsteni","email":"kfydoe2k@gnu.org"},
{"id":94,"name":"Elonore","email":"ethirsk2l@foxnews.com"},
{"id":95,"name":"Noelle","email":"ngoodinson2m@ftc.gov"},
{"id":96,"name":"Wandie","email":"wvenus2n@netscape.com"},
{"id":97,"name":"Peria","email":"pbaumber2o@feedburner.com"},
{"id":98,"name":"Madella","email":"mpetrovic2p@taobao.com"},
{"id":99,"name":"Becka","email":"bheiner2q@oracle.com"},
{"id":100,"name":"Teodora","email":"tkeaveney2r@nytimes.com"},
{"id":101,"name":"Teressa","email":"tbettenay2s@unblog.fr"},
{"id":102,"name":"Hildagard","email":"hjoddens2t@reddit.com"},
{"id":103,"name":"Marianna","email":"mhansard2u@hao123.com"},
{"id":104,"name":"Lianne","email":"lody2v@sciencedirect.com"},
{"id":105,"name":"Ruperta","email":"rlippett2w@stanford.edu"},
{"id":106,"name":"Gilli","email":"gshelford2x@histats.com"},
{"id":107,"name":"Katina","email":"kwhaplington2y@skyrock.com"},
{"id":108,"name":"Geneva","email":"gandrea2z@bbb.org"},
{"id":109,"name":"Erinn","email":"eremon30@miibeian.gov.cn"},
{"id":110,"name":"Astra","email":"atomlinson31@altervista.org"},
{"id":111,"name":"Becka","email":"bmarcos32@forbes.com"},
{"id":112,"name":"Nani","email":"nbertlin33@webmd.com"},
{"id":113,"name":"Anni","email":"apittaway34@rakuten.co.jp"},
{"id":114,"name":"Georgeta","email":"gjelleman35@live.com"},
{"id":115,"name":"Netty","email":"nrotlauf36@altervista.org"},
{"id":116,"name":"Petronille","email":"pponton37@zdnet.com"},
{"id":117,"name":"Shirl","email":"sgiottini38@earthlink.net"},
{"id":118,"name":"Micki","email":"mblue39@telegraph.co.uk"},
{"id":119,"name":"Nanine","email":"nsoots3a@wsj.com"},
{"id":120,"name":"Nichol","email":"nzupo3b@ow.ly"},
{"id":121,"name":"Ruthann","email":"rmaclennan3c@bravesites.com"},
{"id":122,"name":"Ellyn","email":"ececil3d@ftc.gov"},
{"id":123,"name":"Maryann","email":"mgreatrex3e@columbia.edu"},
{"id":124,"name":"Gussi","email":"gmillion3f@webs.com"},
{"id":125,"name":"Jenilee","email":"jharwin3g@bbc.co.uk"},
{"id":126,"name":"Nat","email":"ncrosswaite3h@homestead.com"},
{"id":127,"name":"Cara","email":"csebring3i@forbes.com"},
{"id":128,"name":"Rhody","email":"rhazlewood3j@fema.gov"},
{"id":129,"name":"Mirabel","email":"mruggier3k@amazon.de"},
{"id":130,"name":"Gloria","email":"gwayon3l@alexa.com"},
{"id":131,"name":"Franny","email":"focuolahan3m@plala.or.jp"},
{"id":132,"name":"Daniele","email":"dlarn3n@webmd.com"},
{"id":133,"name":"Kandy","email":"kmaffiotti3o@networkadvertising.org"},
{"id":134,"name":"Alicea","email":"asalomon3p@who.int"},
{"id":135,"name":"Leah","email":"ldunkerly3q@google.fr"},
{"id":136,"name":"Charis","email":"cfigurski3r@imgur.com"},
{"id":137,"name":"Evelyn","email":"eloosely3s@myspace.com"},
{"id":138,"name":"Pammy","email":"pamiranda3t@homestead.com"},
{"id":139,"name":"Abigale","email":"aguidi3u@state.gov"},
{"id":140,"name":"Arlen","email":"achaffey3v@vistaprint.com"},
{"id":141,"name":"Celestyna","email":"cmiall3w@addthis.com"},
{"id":142,"name":"Joete","email":"jpedri3x@mit.edu"},
{"id":143,"name":"Saraann","email":"scampbelldunlop3y@google.it"},
{"id":144,"name":"Tonye","email":"tmeese3z@msu.edu"},
{"id":145,"name":"Ynes","email":"ywadley40@sitemeter.com"},
{"id":146,"name":"Elianora","email":"ekinze41@latimes.com"},
{"id":147,"name":"Chickie","email":"cmarler42@walmart.com"},
{"id":148,"name":"Susan","email":"sbatter43@youtube.com"},
{"id":149,"name":"Marcelline","email":"msimondson44@sohu.com"},
{"id":150,"name":"Dena","email":"dnicholson45@netvibes.com"},
{"id":151,"name":"Dita","email":"dlewsy46@yolasite.com"},
{"id":152,"name":"Tomasina","email":"tlambdean47@amazon.com"},
{"id":153,"name":"Yoko","email":"ygardner48@umn.edu"},
{"id":154,"name":"Valaree","email":"vmesser49@naver.com"},
{"id":155,"name":"Stacy","email":"sclampe4a@businesswire.com"},
{"id":156,"name":"Cordula","email":"coxbie4b@adobe.com"},
{"id":157,"name":"Caye","email":"ccrabbe4c@icio.us"},
{"id":158,"name":"Valenka","email":"vholdey4d@bluehost.com"},
{"id":159,"name":"Kat","email":"kparram4e@canalblog.com"},
{"id":160,"name":"Jorie","email":"jfairfull4f@msu.edu"},
{"id":161,"name":"Riva","email":"rgrowcock4g@fastcompany.com"},
{"id":162,"name":"Hillary","email":"hblazhevich4h@csmonitor.com"},
{"id":163,"name":"Augustina","email":"aebbetts4i@shop-pro.jp"},
{"id":164,"name":"Ursala","email":"uparkhouse4j@epa.gov"},
{"id":165,"name":"Christye","email":"ccuttelar4k@yelp.com"},
{"id":166,"name":"Onida","email":"ochalcraft4l@usda.gov"},
{"id":167,"name":"Marne","email":"mrilings4m@tripadvisor.com"},
{"id":168,"name":"Lonna","email":"lveldman4n@alexa.com"},
{"id":169,"name":"Lorette","email":"lgercke4o@eepurl.com"},
{"id":170,"name":"Ellyn","email":"etuppeny4p@wsj.com"},
{"id":171,"name":"Kakalina","email":"kstandish4q@arizona.edu"},
{"id":172,"name":"Dorothea","email":"dcammell4r@hostgator.com"},
{"id":173,"name":"Shandie","email":"shousecraft4s@lulu.com"},
{"id":174,"name":"Aleta","email":"aplinck4t@bing.com"},
{"id":175,"name":"Kendre","email":"kcottier4u@ucoz.ru"},
{"id":176,"name":"Janeen","email":"jclarke4v@wix.com"},
{"id":177,"name":"Nicolle","email":"nsarll4w@usgs.gov"},
{"id":178,"name":"Liane","email":"lespinet4x@netlog.com"},
{"id":179,"name":"Emlynn","email":"eedward4y@yellowbook.com"},
{"id":180,"name":"Rosabella","email":"rredshaw4z@canalblog.com"},
{"id":181,"name":"Allie","email":"asiemantel50@wordpress.com"},
{"id":182,"name":"Sybille","email":"slawley51@exblog.jp"},
{"id":183,"name":"Maude","email":"mbleue52@stumbleupon.com"},
{"id":184,"name":"Angeline","email":"akennet53@discuz.net"},
{"id":185,"name":"Aeriel","email":"alinacre54@statcounter.com"},
{"id":186,"name":"Dodi","email":"dreven55@webnode.com"},
{"id":187,"name":"Allison","email":"ageorgot56@cloudflare.com"},
{"id":188,"name":"Roanne","email":"rsewter57@boston.com"},
{"id":189,"name":"Mirilla","email":"mkrishtopaittis58@plala.or.jp"},
{"id":190,"name":"Gertrud","email":"glarciere59@hubpages.com"},
{"id":191,"name":"Davita","email":"dburgum5a@bing.com"},
{"id":192,"name":"Nisse","email":"nallitt5b@youku.com"},
{"id":193,"name":"Giustina","email":"gglasscott5c@prweb.com"},
{"id":194,"name":"Costanza","email":"csawdon5d@ftc.gov"},
{"id":195,"name":"Lita","email":"lcawte5e@ycombinator.com"},
{"id":196,"name":"Wren","email":"winnes5f@de.vu"},
{"id":197,"name":"Nissa","email":"nedworthy5g@t.co"},
{"id":198,"name":"Teirtza","email":"tpopelay5h@youtu.be"},
{"id":199,"name":"Monica","email":"mkrammer5i@digg.com"},
{"id":200,"name":"Gweneth","email":"gkennerley5j@jalbum.net"},
{"id":201,"name":"Debby","email":"dkielt5k@usatoday.com"},
{"id":202,"name":"Brooke","email":"bllewelly5l@msu.edu"},
{"id":203,"name":"Harrie","email":"hglyde5m@hostgator.com"},
{"id":204,"name":"Hetty","email":"halbone5n@businessweek.com"},
{"id":205,"name":"Corny","email":"cpickworth5o@myspace.com"},
{"id":206,"name":"Minni","email":"mmolnar5p@stumbleupon.com"},
{"id":207,"name":"Chantalle","email":"ccolgrave5q@slate.com"},
{"id":208,"name":"Alleen","email":"alattimore5r@narod.ru"},
{"id":209,"name":"Kyrstin","email":"klamputt5s@yahoo.com"},
{"id":210,"name":"Kristan","email":"kgotfrey5t@nationalgeographic.com"}]
},{}]},{},[1]);
