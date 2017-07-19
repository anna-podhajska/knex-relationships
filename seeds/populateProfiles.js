
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {profile_id: 1, user_id: 99901, image_url: 'http://i.telegraph.co.uk/multimedia/archive/01596/aardvark_1596206c.jpg', deepest_fears: 'cats', age: 13 },
        {profile_id: 2, user_id: 99902, image_url: 'http://www.krugerpark.co.za/images/1-baboon-portrait-590a.jpg', deepest_fears: 'heights', age: 33},
        {profile_id: 3, user_id: 99903, image_url: 'https://oncafarijaguarproject.files.wordpress.com/2013/05/capybara-close-up-side-on-sharp.jpg', deepest_fears: 'the number 3', age: 53 },
        {profile_id: 4, user_id: 99904, image_url: 'https://web.stanford.edu/dept/CTL/cgi-bin/academicskillscoaching/wp-content/uploads/2012/07/baby-duck.jpg', deepest_fears: 'Donald Trump', age: 99 },
        {profile_id: 5, user_id: 99905, image_url: 'https://cdn.theatlantic.com/assets/media/img/photo/2015/08/world-elephant-day/e01_96540399/main_900.jpg?1439400103', deepest_fears: 'water', age: 10008 },
        {profile_id: 6, user_id: 99906, image_url: 'http://1.bp.blogspot.com/-pXOY4IBQ-Dw/UvApEAYDkNI/AAAAAAAABco/Vwb4QcekTc4/s1600/Screenshot+2014-02-03+17.01.30.png', deepest_fears: 'the color red', age: 3 },
        {profile_id: 7, user_id: 99907, image_url: 'http://i.imgur.com/WpcGCQ7.jpg', deepest_fears: 'sunburns', age: 20 },
        {profile_id: 8, user_id: 99908, image_url: 'https://s-media-cache-ak0.pinimg.com/736x/42/59/dc/4259dc6a476ef45117adf571a13b218b--funny-birds-funny-animals.jpg', deepest_fears: 'lactose', age: 19 },
        {profile_id: 9, user_id: 99909, image_url: 'https://s-media-cache-ak0.pinimg.com/736x/d6/76/cc/d676ccdf7c2bd8585b4fb90cf3e8dcde--animals-planet-zoo-animals.jpg', deepest_fears: 'scary movies', age: 46 },
        {profile_id: 10, user_id: 99910, image_url: 'https://media.mnn.com/assets/images/2014/03/9-jerboa.jpg.638x0_q80_crop-smart.jpg', deepest_fears: 'fast cars', age: 4 },
        {profile_id: 11, user_id: 99911, image_url: 'https://s-media-cache-ak0.pinimg.com/736x/af/87/23/af8723b34148a3a5178e76cdb9f5b9a4--pretty-animals-cutest-animals.jpg', deepest_fears: 'people', age: 4 },
        {profile_id: 12, user_id: 99912, image_url: 'https://1badblogger.files.wordpress.com/2014/01/ringtail-lemur.jpg', deepest_fears: 'dogs', age: 6 },
        {profile_id: 13, user_id: 99913, image_url: 'http://pm1.narvii.com/6467/ed0d5031fa9ee543e2df88a5f561e539d2fc63ab_hq.jpg', deepest_fears: 'snakes', age: 58 },
        {profile_id: 14, user_id: 99914, image_url: 'https://s-media-cache-ak0.pinimg.com/236x/fd/b1/21/fdb121474ddf862b63efe3157ca8d353--african-safari-african-animals.jpg', deepest_fears: 'spiders', age: 88 },
        {profile_id: 15, user_id: 99915, image_url: 'https://bigcatrescue.org/wp-content/oqey_gallery/galleries/ocelots-of-bcr/galimg/ocelotspurrfection.jpg', deepest_fears: 'horros movies', age: 9 },
        {profile_id: 16, user_id: 99916, image_url: 'http://3.bp.blogspot.com/-PHu0Jkv4-9o/U-lPo-mpHTI/AAAAAAAAFIg/qtcEhaeSiCU/s1600/cute_baby_pangolin.jpg', deepest_fears: 'falling', age: 7},
        {profile_id: 17, user_id: 99917, image_url: 'https://s-media-cache-ak0.pinimg.com/736x/ba/14/13/ba1413d7b9e2aed10e092260e60a311a--good-morning-quokka.jpg', deepest_fears: 'deficiency of coffee', age: 7 },
        {profile_id: 18, user_id: 99918, image_url: 'https://www.konicaminolta.com/kids/endangered_animals/library/field/img/okinawa-rail_img01-l.jpg', deepest_fears: 'thunder and lightning', age: 52 },
        {profile_id: 19, user_id: 99919, image_url: 'https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg', deepest_fears: 'grandpa', age: 4 },
        {profile_id: 20, user_id: 99920, image_url: 'http://sevendaysaweek.co/wp-content/uploads/2016/10/turtle-823295_640.jpg', deepest_fears: 'bananas', age:  62},
        {profile_id: 21, user_id: 99921, image_url: 'http://www.wwfpak.org/species/images/PunjabUrial.jpg', deepest_fears: 'Harrison', age: 33 },
        {profile_id: 22, user_id: 99922, image_url: 'https://conservacionpatagonica.files.wordpress.com/2011/06/viscacha-3.png', deepest_fears: 'Harrison', age: 56},
        {profile_id: 23, user_id: 99923, image_url: 'http://media.istockphoto.com/photos/wombat-picture-id173872734', deepest_fears: 'Harrison', age: 69 },
        {profile_id: 24, user_id: 99924, image_url: 'https://betanews.com/wp-content/uploads/2016/01/Xerus-600x400.jpg', deepest_fears: 'gray hair', age: 567},
        {profile_id: 25, user_id: 99925, image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg/1280px-Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg', deepest_fears: 'dying', age: 8 },
        {profile_id: 26, user_id: 99926, image_url: 'https://i.ytimg.com/vi/ARUzsPQQQys/maxresdefault.jpg', deepest_fears: 'clowns', age: 1 },
      ]);
    });
};
