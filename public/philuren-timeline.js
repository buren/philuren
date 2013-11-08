var initTimeline = function () {
  var dataObject = {
    "timeline":
    {
      "headline":"Philuren: <br> Coffe drinkers, software tinkers",
      "type":"default",
      "text":"<p>It all started with Java</p><p><pre>public static void main(String[] args() {<br>&nbsp;&nbsp;System.out.println(\"Hello world!\");<br>}</pre></p><p>but not end there:</p> <p><pre>hackaton_participants.each do |p| <br>&nbsp;&nbsp; puts \"Hi #{p.name}\"<br>end</pre></p>",
      "asset": {
        "media":"/img/320x160.gif",
        "credit":"On port 22, not so far away",
        "caption":"Open source tech"
    },
    "date": [
        {
        "startDate":"2009,09,01",
        "endDate":"2009,10,20",
        "headline":"Per Holm's Java",
        "text":"<p>Turtle t = new Turtle()</p> <p><strong>just wasn't enough</strong></p><br />",
        "tag":"Java",
        "classname":"optionaluniqueclassnamecanbeaddedhere",
        "asset": {
          "media":"/img/java.jpg",
          "credit":"Novice",
          "caption":""
        }
      },
      {
      "startDate":"2011,01,01",
      "endDate":"2011,10,20",
      "headline":"Lang revolution",
      "text":"<p>Turtle t = new Turtle()</p> <p><strong>just wasn't enough</strong></p><br /><img class=\"lang-logo\" src=\"/img/android.png\" alt=\"android\"><img class=\"lang-logo\" src=\"/img/aws.jpg\" alt=\"aws\"><img class=\"lang-logo\" src=\"/img/opencv.png\" alt=\"opencv\"><img class=\"lang-logo\" src=\"/img/php.jpeg\" alt=\"php\"><img class=\"lang-logo\" src=\"/img/ruby.png\" alt=\"ruby\"><img class=\"lang-logo\" src=\"/img/rails.png\" alt=\"rails\">",
      "tag":"Coffee drinker",
      "classname":"optionaluniqueclassnamecanbeaddedhere",
    },
    {
      "startDate":"2012,01,01",
      "endDate":"2012,10,20",
      "headline":"Hacker station",
      "text":"",
      "tag":"Coffee consumer",
      "classname":"optionaluniqueclassnamecanbeaddedhere",
    },
    {
      "startDate":"2013,09,01",
      "endDate":"2013,10,20",
      "headline":"Coding music",
      "text":"<p>Sets",
      "tag":"",
      "classname":"optionaluniqueclassnamecanbeaddedhere",
      "asset": {
        "media":"https://soundcloud.com/robot-heart/dj-tennis-robot-heart-burning-man-2013",
        "credit":"soundcloud",
        "caption":""
      }
    }
    ],
    "era": [
      {
        "startDate":"2009,12,10",
        "endDate":"2013,11,07",
        "headline":"Birth of Phifflarn & Buren",
        "text":"<p>Body text goes here, some HTML is OK</p>",
        "tag":"This is Optional"
      }
      ]
    }
  }
  createStoryJS({
    type:       'timeline',
    width:      '1150',
    height:     '600',
    source:     dataObject,
    embed_id:   'philuren-timeline'
  });
}
