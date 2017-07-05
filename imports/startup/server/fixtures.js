import { Meteor } from 'meteor/meteor';
import { Shows } from '../../api/shows/collection';
import { addShow } from '../../api/shows/methods';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Shows.find().count() === 0) {
    const urls = [
      'http://lorepodcast.libsyn.com/rss',
      'http://cgpgrey.libsyn.com/rss',
      'http://adventurezone.libsyn.com/rss',
      'http://feeds.feedburner.com/BabyGeniuses',
      'http://beefanddairynetwork.libsyn.com/rss',
      'http://npr.org/rss/podcast.php?id=510309',
      'http://bunkerbuddies.libsyn.com/rss',
      'http://cipyd.libsyn.com/rss',
      'http://feeds.feedburner.com/coyleandsharpe',
      'http://davehillincident.libsyn.com/rss',
      'http://deadpilotssociety.libsyn.com/rss',
      'http://theflophouse.libsyn.com/rss',
      'http://feeds.feedburner.com/TheGreatestGeneration',
      'http://insidepop.libsyn.com/rss',
      'http://www.maximumfun.org/feeds/iw.xml',
      'http://feeds.feedburner.com/thornmorris',
      'http://feeds.feedburner.com/todayinthepast',
      'http://feeds.feedburner.com/kasperhauser',
      'http://ladytolady.libsyn.com/rss',
      'http://magiclessons.libsyn.com/rss',
      'http://minoritykorner.libsyn.com/rss',
      'http://feeds.feedburner.com/mbmbam',
      'http://feeds.feedburner.com/OhNoPodcast',
      'http://maximumfun.org/feeds/onebadmother.xml',
      'http://maximumfun.org/feeds/poprocket.xml',
      'http://maximumfun.org/feeds/rg.xml',
      'http://rosebuddies.libsyn.com/rss',
      'http://sawbones.libsyn.com/rss',
      'http://shmanners.libsyn.com/rss',
      'http://stillbuffering.libsyn.com/rss',
      'http://feeds.feedburner.com/stoppodcastingyourself',
      'http://throwingshade.libsyn.com/rss',
      'http://tightsandfights.libsyn.com/rss',
      'http://trendslikethese.libsyn.com/rss',
      'http://maximumfun.org/feeds/tt.xml',
      'http://wegotthis.libsyn.com/rss',
    ];
    urls.forEach(url => addShow({ url }));
  }
});
