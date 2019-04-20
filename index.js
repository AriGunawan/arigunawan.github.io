// Mockup data
var mockFeeds = [
  {
    Id: 'ea3ed387-f0bd-4845-aa60-b0c2c0484488',
    Title: 'Tabligh Akbar',
    ShortDescription: '',
    StartDateTime: '09.00',
    EndDateTime: '10.00',
    PosterUrl: 'Images/uas.jpg',
    NewsSpeakers: 'UAS',
    Organizer: {
      Id: '82e4080a-f03e-42c6-a854-753b8c18f09f',
      ShortName: 'Pemerintah Jambi',
      Contact: {
        Id: 'f61967b1-3ca8-46a5-a779-083e6fda414c',
        Name: 'Joni',
        PhoneNumber: '6285722010199'
      }
    },
    Place: {
      Id: '0558e3e5-edc4-49a8-a545-8d4b4e81e19d',
      Name: 'Masjid Baiturrahmaan',
      Location: 'Margahayu Selatan',
      MapLocationUrl: 'https://goo.gl/masfd34',
      Contact: {
        Id: 'dd7648ec-f650-4200-9fd5-1da7cb5cac6d',
        Name: 'Joni',
        PhoneNumber: '6293716749402'
      }
    }
  },
  {
    Id: 'ea3ed387-f0bd-4845-aa60-b0c2c0484489',
    Title: 'Hijrah',
    ShortDescription: '',
    StartDateTime: '15.30',
    EndDateTime: 'Selesai',
    PosterUrl: 'Images/salim.jpg',
    NewsSpeakers: 'Salim A Fillah',
    Organizer: {
      Id: '82e4080a-f03e-42c6-a854-753b8c18f09f',
      ShortName: 'Takmir Jogokariyan',
      Contact: {
        Id: 'f61967b1-3ca8-46a5-a779-083e6fda414c',
        Name: 'Dodo',
        PhoneNumber: '6289401784963'
      }
    },
    Place: {
      Id: '64e43ea0-69b6-49bc-a8a1-a229df502b06',
      Name: 'Masjid Al Haq',
      Location: 'Margahayu Selatan',
      MapLocationUrl: 'https://goog.gl/wrwa3',
      Contact: {
        Id: 'dd7648ec-f650-4200-9fd5-1da7cb5cac6d',
        Name: 'Joni',
        PhoneNumber: '6293716749402'
      }
    }
  },
  {
    Id: 'ea3ed387-f0bd-4845-aa60-b0c2c0484489',
    Title: 'Pangeling',
    ShortDescription: '',
    StartDateTime: '13.00',
    EndDateTime: 'Selesai',
    PosterUrl: 'Images/abe.jpg',
    NewsSpeakers: 'ABE',
    Organizer: {
      Id: '82e4080a-f03e-42c6-a854-753b8c18f09f',
      ShortName: 'Righod',
      Contact: {
        Id: 'dd7648ec-f650-4200-9fd5-1da7cb5cac6d',
        Name: 'Joni',
        PhoneNumber: '6293716749402'
      }
    },
    Place: {
      Id: '64e43ea0-69b6-49bc-a8a1-a229df502b06',
      Name: 'Masjid Baiturrahim',
      Location: 'Margahayu Selatan',
      MapLocationUrl: 'https://goog.gl/wrwa3',
      Contact: {
        Id: 'dd7648ec-f650-4200-9fd5-1da7cb5cac6d',
        Name: 'Joni',
        PhoneNumber: '6293716749402'
      }
    }
  }
];

new Vue({
  el: '#feed-container',
  data: {
    feeds: []
  },
  methods: {
    loadInitialData: function () {
      this.feeds = mockFeeds; // To be updated with actual data
    },
    initializeSwiper: function () {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        speed: 1000
      });
    }
  },
  mounted: function () {
    this.loadInitialData();
    this.initializeSwiper();
  }
});