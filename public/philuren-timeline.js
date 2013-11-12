var initTimeline = function () {
  var timelineContent = {
    "timeline":
    {
      "headline":"Philuren: <br> Coffe drinkers, software tinkers",
      "type":"default",
      "text":"<p></p>",
      "asset": {
        "media":"http://sprinkle.se",
        "credit":"On port 22, not so far away",
        "caption":"Open source tech"
    },
    "date": [
      {
        "startDate":"2012,6,10",
        "endDate":"2013,02,1",
        "headline":"Sony Mobile Reaearch, Advanced Enabler Lab",
        "text":"<p>I have developed a set of gesture detection algorithms using open cv, a webrtc videochat client for andoid devices and a tremor detector.</p>",
        "tag":"phifflarn",
        "classname":"Sony Mobile",
        "asset": {
          "media":"/img/sony.jpg",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2013,01,30",
        "endDate":"2013,10,25",
        "headline":"Camera Based Gesture Detection For Android Devices",
        "text":"<p>Description</p>",
        "tag":"phifflarn",
        "classname":"thesis",
        "asset": {
          "media":"/img/sony.jpg",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2013,05,30",
        "endDate":"2013,09,23",
        "headline":"Technical Editor for Android Pushing the Limits by Erik Hellman",
        "text":"<p>Awesome</p>",
        "tag":"phifflarn",
        "classname":"editor",
        "asset": {
          "media":"/img/sony.jpg",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2011,03,03",
        "endDate":"2011,05,23",
        "headline":"Edith",
        "text":"<p>Wrote iOS portable Web Development app</p>",
        "tag":"phifflarn",
        "classname":"edith",
        "asset": {
          "media":"/img/sony.jpg",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2012,11,05",
        "endDate":"2013,01,01",
        "headline":"Full stack engineer Trialbee",
        "text":"<p>Web Developer <br /> Ruby on Rails <br />MySQL <br /> HTML5, CSS, JavaScript</p>",
        "tag":"buren",
        "classname":"trialbee",
        "asset": {
          "media":"/img/trialbee_page.png",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2013,06,03",
        "endDate":"2013,08,10",
        "headline":"Custom WYSIWYG CMS for Sprinkle",
        "text":"<p>Written with Ruby on Rails</p>",
        "tag":"buren",
        "classname":"sprinkle",
        "asset": {
          "media":"/img/sprinkle_wysiwyg.png",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2011,06,03",
        "endDate":"2011,08,03",
        "headline":"Transputec Plc.",
        "text":"<p>Cross platform HTML5 app development.</p>",
        "tag":"buren",
        "classname":"transputec",
        "asset": {
          "media":"/img/transputec.png",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2008,08,30",
        "endDate":"2014,01,30",
        "headline":"LTH MSC, Technical Physics",
        "text":"<p></p>",
        "tag":"phifflarn",
        "classname":"lth",
        "asset": {
          "media":"/img/lth.jpg",
          "credit":"",
          "caption":""
        }
      },
      {
        "startDate":"2009,08,30",
        "endDate":"2015,06,01",
        "headline":"LTH MSC, Software Engineering",
        "text":"<p></p>",
        "tag":"buren",
        "classname":"lth",
        "asset": {
          "media":"/img/lth.jpg",
          "credit":"",
          "caption":""
        }
      }
    ]
    }
  }

  createStoryJS({
    type:       'timeline',
    height:     '600',
    start_at_end: true,
    source:     timelineContent,
    embed_id:   'philuren-timeline'
  });

}
