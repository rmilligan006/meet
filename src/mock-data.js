const mockData = [
  {
    kind: "calendar#event",
    etag: '"3181159875584000"',
    id: "3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:14:30.000Z",
    updated: "2020-05-27T11:45:37.792Z",
    summary: "React is Fun",
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
    location: "Berlin, Germany",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-05-22T14:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-05-22T15:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurringEventId: "3qtd6uscq4tsi6gc7nmmtpqlct",
    originalStartTime: {
      dateTime: "2020-05-22T14:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    iCalUID: "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
  {
    kind: "calendar#event",
    etag: '"3181161784712000"',
    id: "4eahs9ghkhrvkld72hogu9ph3e",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:17:46.000Z",
    updated: "2020-05-27T12:01:32.356Z",
    summary: "Learn JavaScript",
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    location: "London, UK",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-05-19T16:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-05-19T17:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TH,TU"],
    iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
  {
    kind: "calendar#event",
    etag: '"3187221506816000"',
    id: "48m09le389vijbqfs2mcr6i87q",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-07-01T13:39:01.000Z",
    updated: "2020-07-01T13:39:13.408Z",
    summary: "Node Gang",
    description:
      "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
    location: "Sydney NSW, Australia",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-06-30T09:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-06-30T10:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurrence: ["RRULE:FREQ=WEEKLY;BYDAY=TU"],
    iCalUID: "48m09le389vijbqfs2mcr6i87q@google.com",
    sequence: 1,
    hangoutLink: "https://meet.google.com/wdc-wutt-tji",
    conferenceData: {
      entryPoints: [
        {
          entryPointType: "video",
          uri: "https://meet.google.com/wdc-wutt-tji",
          label: "meet.google.com/wdc-wutt-tji",
        },
        {
          entryPointType: "more",
          uri: "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
          pin: "3796108774207",
        },
        {
          regionCode: "DE",
          entryPointType: "phone",
          uri: "tel:+49-40-8081618974",
          label: "+49 40 8081618974",
          pin: "170634768",
        },
      ],
      conferenceSolution: {
        key: {
          type: "hangoutsMeet",
        },
        name: "Google Meet",
        iconUri:
          "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png",
      },
      conferenceId: "wdc-wutt-tji",
    },
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
  {
    kind: "calendar#event",
    etag: '"3187221858184000"',
    id: "3gi3kabkm3bua5lq3jhscc8s4c",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-07-01T13:23:24.000Z",
    updated: "2020-07-01T13:42:09.092Z",
    summary: "Intro to AngularJS-Remote",
    description:
      "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
    location: "New York, NY, USA",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-06-29T22:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-06-29T23:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],
    iCalUID: "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
    sequence: 2,
    hangoutLink: "https://meet.google.com/xcb-hfjb-psv",
    conferenceData: {
      entryPoints: [
        {
          entryPointType: "video",
          uri: "https://meet.google.com/xcb-hfjb-psv",
          label: "meet.google.com/xcb-hfjb-psv",
        },
        {
          entryPointType: "more",
          uri: "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
          pin: "4442155852117",
        },
        {
          regionCode: "DE",
          entryPointType: "phone",
          uri: "tel:+49-40-8081617300",
          label: "+49 40 8081617300",
          pin: "657955248",
        },
      ],
      conferenceSolution: {
        key: {
          type: "hangoutsMeet",
        },
        name: "Google Meet",
        iconUri:
          "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png",
      },
      conferenceId: "xcb-hfjb-psv",
    },
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
];

export { mockData };
