export interface BlogArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  author: string
  content: BlogSection[]
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'quote' | 'list' | 'stat'
  text?: string
  items?: string[]
  stat?: string
  statLabel?: string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'why-nairobi-businesses-need-a-website',
    title: 'Why Your Nairobi Business Is Losing Clients Without a Website',
    excerpt:
      'In 2026, over 60% of Kenyan consumers search online before buying. If your business is not online, you are invisible to your best customers.',
    date: '2026-04-10',
    readTime: '5 min',
    category: 'Business Growth',
    author: 'Dennis  Mlachake',
    content: [
      {
        type: 'paragraph',
        text: 'Let me tell you about a hardware store in Westlands. The owner has been in business for eleven years. He knows every contractor in a five kilometre radius by name. His prices are fair, his stock is deep, and his reputation in the area is impeccable. Last year, a competitor opened two streets away with half the experience and a third of the product range. Within six months, the new shop was pulling in clients the veteran owner had never met. The difference? The new shop had a website. The veteran did not.',
      },
      {
        type: 'paragraph',
        text: 'This is not an isolated story. It is happening across Nairobi every single day, in every sector from law firms in Upperhill to tour operators in Karen to restaurants in Kilimani. The Kenyan market has gone digital faster than most business owners have had time to notice, and the ones who have not caught up are paying a price they cannot yet measure.',
      },
      {
        type: 'heading',
        text: 'The Numbers Are Not Ambiguous',
      },
      {
        type: 'stat',
        stat: '63%',
        statLabel: 'of Kenyan consumers research a business online before making contact, even if they intend to visit in person.',
      },
      {
        type: 'paragraph',
        text: 'Think about what that means. Nearly two thirds of your potential clients are going online first. They are searching, reading, comparing. If you are not there, you do not exist in their consideration set. You are not even losing the comparison. You are not in the room at all.',
      },
      {
        type: 'stat',
        stat: '92%',
        statLabel: 'of all Google searches in Kenya happen on a mobile device, usually on Safaricom data.',
      },
      {
        type: 'paragraph',
        text: 'The Kenyan consumer is not sitting at a desktop computer in an air conditioned office searching for services. They are on a mid range Android phone, on a matatu, in between meetings, searching in thirty second bursts. Your website needs to load in under three seconds on 3G or you have already lost them.',
      },
      {
        type: 'heading',
        text: 'Word of Mouth Is Not Dead. But It Has Changed.',
      },
      {
        type: 'paragraph',
        text: 'The most common objection I hear from business owners who have survived without a website is this: "I get all my clients through referrals. Word of mouth works for me."',
      },
      {
        type: 'paragraph',
        text: 'I do not argue with that. Word of mouth is powerful. In Kenya, it is arguably the most trusted form of marketing that exists. But here is what has changed: word of mouth now happens online, and it always ends with a Google search.',
      },
      {
        type: 'paragraph',
        text: 'Your satisfied client tells their colleague about you. The colleague pulls out their phone and searches your business name. If nothing comes up, or if what comes up is a bare Google Maps listing with no photos and no information, the trust the referral created evaporates instantly. The colleague thinks: if this business is as good as you say, why do they have no online presence? And they move on.',
      },
      {
        type: 'quote',
        text: 'A referral is now a search prompt, not a closed deal. Your website is where the deal gets closed.',
      },
      {
        type: 'heading',
        text: 'What Your Competitors Are Doing Right Now',
      },
      {
        type: 'paragraph',
        text: 'While you are reading this, businesses in your sector are investing in websites that rank on page one of Google Kenya for the exact services you offer. They are capturing the clients who would have found you, if you had been findable. Those clients are not coming back to look for you. Once they have found a credible competitor online, the decision is made.',
      },
      {
        type: 'list',
        items: [
          'A law firm in Nairobi with a fast, professional website ranks for "corporate lawyer Nairobi" and gets three new client enquiries every week from people who never heard of them before.',
          'A tour operator in Karen ranks for "best safari packages Kenya" and books international tourists who searched from London and Dubai.',
          'A construction company in Industrial Area appears in Google Maps results for "contractors Nairobi" and fields calls from NGOs and developers who could not find any other credible option.',
        ],
      },
      {
        type: 'paragraph',
        text: 'None of these businesses are doing anything magical. They have a well built, fast loading, Google optimised website. That is the entire advantage.',
      },
      {
        type: 'heading',
        text: 'The Cost of Not Having a Website',
      },
      {
        type: 'paragraph',
        text: 'Business owners often frame this as a question of cost. "How much does a website cost?" is the wrong question. The right question is: "How much revenue am I leaving on the table every month by being invisible online?"',
      },
      {
        type: 'paragraph',
        text: 'If your average client is worth KSh 50,000 and you are missing three potential clients per month because they could not find you online, that is KSh 150,000 in lost revenue every month. Every month. A website that costs KSh 40,000 pays for itself in the first ten days of the second month.',
      },
      {
        type: 'heading',
        text: 'What a Good Website Actually Does for a Kenyan Business',
      },
      {
        type: 'list',
        items: [
          'It works while you sleep. A client in Mombasa can discover your Nairobi firm at 11pm and send you an enquiry before you wake up.',
          'It qualifies leads before they call. A well written website answers the basic questions so the clients who reach you are already interested.',
          'It builds credibility instantly. A professional website signals that you are an established, serious business worth trusting.',
          'It ranks on Google. With proper SEO, your website appears when people search for exactly what you sell.',
          'It accepts M-Pesa. An e-commerce site with M-Pesa integration turns browsers into buyers without a single phone call.',
        ],
      },
      {
        type: 'heading',
        text: 'The Time to Act Is Now, Not Next Quarter',
      },
      {
        type: 'paragraph',
        text: 'Every month you delay is another month your competitors spend building domain authority, collecting reviews, and ranking higher on Google. SEO is a compounding investment. The business that starts today will be on page one in six months. The business that starts in six months will need another six months after that.',
      },
      {
        type: 'paragraph',
        text: 'The Kenyan digital market is still early enough that a well built website can achieve page one rankings within sixty to ninety days in most niches. That window will not stay open forever. The businesses that move now will be the ones that are difficult to displace in two years time.',
      },
      {
        type: 'quote',
        text: 'The best time to build your website was five years ago. The second best time is today.',
      },
    ],
  },
  {
    slug: 'wordpress-vs-nextjs-kenya',
    title: 'WordPress vs Next.js: What Is Right for Your Kenyan Business?',
    excerpt:
      'The platform you choose determines your SEO, speed, and long term costs. Here is an honest breakdown for Kenyan SMEs.',
    date: '2026-04-22',
    readTime: '7 min',
    category: 'Web Technology',
    author: 'Dennis  Mlachake',
    content: [
      {
        type: 'paragraph',
        text: 'This is the question I get asked more than any other: "Should I get a WordPress site or a Next.js site?" Most developers will give you a technical answer full of jargon that leaves you more confused than when you started. I am going to give you a business owner\'s answer, because that is what actually matters.',
      },
      {
        type: 'paragraph',
        text: 'The honest truth is that the platform is less important than most people think. A badly built WordPress site will underperform a well built WordPress site. A well built Next.js site will outperform a badly built Next.js site. The platform is a tool. What matters is who is using it and how.',
      },
      {
        type: 'paragraph',
        text: 'That said, the choice does matter for specific reasons that are particularly relevant to Kenyan businesses. Let me break it down honestly.',
      },
      {
        type: 'heading',
        text: 'WordPress: What It Is and Who It Is For',
      },
      {
        type: 'paragraph',
        text: 'WordPress powers approximately 43% of all websites on the internet. It has been around since 2003 and has the largest ecosystem of themes, plugins, and developers in the world. In Kenya, it is the most widely used platform for business websites, and for good reason.',
      },
      {
        type: 'subheading',
        text: 'The case for WordPress',
      },
      {
        type: 'list',
        items: [
          'You can update your own content without a developer. Pages, blog posts, images, prices — all editable through a familiar interface that feels like a simplified Word document.',
          'The plugin ecosystem solves almost any problem. WooCommerce for e-commerce, Yoast for SEO, Contact Form 7 for forms — most functionality you need already exists.',
          'Developers are widely available in Nairobi. If your Webmerchants relationship ever ends, you can find another WordPress developer relatively easily.',
          'Hosting is flexible and locally available. You can host WordPress on Kenyan servers through providers like Truehost, which can improve load speeds for local visitors.',
          'Lower initial development cost for standard business sites.',
        ],
      },
      {
        type: 'subheading',
        text: 'The honest limitations of WordPress',
      },
      {
        type: 'list',
        items: [
          'WordPress sites get slow. A fresh WordPress installation is fast. After twelve months of plugins, page builders, and content additions, most WordPress sites become bloated and slow. On Kenyan 3G connections, a five second load time is a conversion killer.',
          'Security requires active maintenance. WordPress is the most targeted CMS by hackers precisely because it is the most popular. Without regular updates and a good security setup, your site is vulnerable.',
          'Page builders create messy code. Most Kenyan WordPress sites are built with Elementor or Divi. These tools create websites quickly but generate code that search engines find harder to read, which hurts your rankings.',
          'You pay for plugins over time. The free plugins that handle critical functions often require paid upgrades. These costs accumulate.',
        ],
      },
      {
        type: 'heading',
        text: 'Next.js: What It Is and Who It Is For',
      },
      {
        type: 'paragraph',
        text: 'Next.js is a React framework built by Vercel. It is what large, performance obsessed companies use when they need a website that loads fast under any conditions. It is what we built this Webmerchants website with, and it is what we build for clients who need maximum performance and SEO results.',
      },
      {
        type: 'subheading',
        text: 'The case for Next.js',
      },
      {
        type: 'list',
        items: [
          'It is genuinely fast. Next.js sites routinely score 95 to 100 on Google PageSpeed. On Kenyan 3G, the difference between a Next.js site and a bloated WordPress site can be four to six seconds. That is the difference between a visitor who stays and one who leaves.',
          'It is built for SEO. Next.js renders pages on the server, which means Google can read every word of your content instantly without waiting for JavaScript to load. This is a significant ranking advantage.',
          'It handles scale without breaking. Whether you have ten visitors a day or ten thousand, the performance stays consistent.',
          'The code is clean and maintainable. No plugins fighting each other, no page builder spaghetti code.',
          'Deployment is free and global on Vercel. Your site loads quickly whether the visitor is in Nairobi, Kisumu, or London.',
        ],
      },
      {
        type: 'subheading',
        text: 'The honest limitations of Next.js',
      },
      {
        type: 'list',
        items: [
          'You cannot update it yourself easily. Unlike WordPress, changing content in a Next.js site typically requires a developer unless a CMS like Contentful or Sanity is integrated.',
          'Developers are less widely available. In Kenya, React and Next.js developers are rarer than WordPress developers. Your dependency on skilled developers is higher.',
          'Higher initial development cost. A well built Next.js site costs more to develop than a WordPress site of equivalent scope.',
        ],
      },
      {
        type: 'heading',
        text: 'The Kenya Specific Factors That Change the Calculation',
      },
      {
        type: 'paragraph',
        text: 'Most comparisons of WordPress vs Next.js are written for European or American audiences where everyone has fast broadband. The Kenyan context changes the calculus significantly.',
      },
      {
        type: 'stat',
        stat: '72%',
        statLabel: 'of Kenyan internet users access the web primarily on mobile data, not broadband.',
      },
      {
        type: 'paragraph',
        text: 'This single fact makes performance a more critical consideration in Kenya than almost anywhere else in the world. A WordPress site that scores 65 on PageSpeed will lose visitors constantly to a Next.js site that scores 98. On a fast Nairobi fibre connection, the user might not notice the difference. On Safaricom 3G in Eldoret, the WordPress site takes six seconds to load and the Next.js site takes one. The user in Eldoret has already left.',
      },
      {
        type: 'heading',
        text: 'The Decision Framework',
      },
      {
        type: 'paragraph',
        text: 'Here is how I recommend Kenyan business owners think about this choice.',
      },
      {
        type: 'subheading',
        text: 'Choose WordPress if:',
      },
      {
        type: 'list',
        items: [
          'You need to update your own content regularly and cannot have a developer on call.',
          'You are a content heavy business like a news site, a blog, or a frequently updated service directory.',
          'Your budget is tight and you need a functional site launched quickly.',
          'You are in a lower competition niche where raw SEO performance is less critical.',
        ],
      },
      {
        type: 'subheading',
        text: 'Choose Next.js if:',
      },
      {
        type: 'list',
        items: [
          'You are in a competitive niche like law, construction, real estate, or hospitality where Google rankings determine who gets the client.',
          'Your site content is relatively stable and does not change daily.',
          'You want a website that will remain fast for five or more years without performance degradation.',
          'You are building an application with user accounts, dashboards, or complex functionality.',
          'You want the best possible Google PageSpeed scores for Kenyan mobile users.',
        ],
      },
      {
        type: 'quote',
        text: 'The platform decision should follow the business goal, not the developer preference.',
      },
      {
        type: 'heading',
        text: 'The Answer Nobody Wants to Hear',
      },
      {
        type: 'paragraph',
        text: 'For most serious Kenyan businesses competing online, Next.js with a headless CMS like Contentful gives you the best of both worlds: the performance and SEO power of Next.js with the ability to update your own content through a friendly interface. It costs more upfront. It returns more over time.',
      },
      {
        type: 'paragraph',
        text: 'But the best website is the one that gets built and launched. A WordPress site live this month beats a Next.js site that is still being planned six months from now. If your priority is speed to market, start with WordPress and plan the migration when your business growth justifies the investment.',
      },
    ],
  },
  {
    slug: 'rank-number-one-google-kenya',
    title: 'How to Rank Number One on Google Kenya in 2026',
    excerpt:
      'Local SEO for the Kenyan market is different. Google Maps ranking, Swahili keywords, and mobile first indexing all play a role.',
    date: '2026-05-01',
    readTime: '8 min',
    category: 'SEO',
    author: 'Dennis  Mlachake',
    content: [
      {
        type: 'paragraph',
        text: 'Ranking number one on Google Kenya is not the same as ranking number one on Google globally. The competition is different, the user behaviour is different, the search patterns are different, and the technical requirements that Google prioritises for Kenyan users are different. If you apply generic SEO advice written for the American or British market to a Kenyan business, you will get mediocre results. If you apply Kenya specific strategy, you can reach page one in sixty to ninety days in most niches.',
      },
      {
        type: 'paragraph',
        text: 'I have done this for research firms, engineering companies, and agritech platforms. Here is what actually works.',
      },
      {
        type: 'heading',
        text: 'Understand How Google Kenya Works',
      },
      {
        type: 'paragraph',
        text: 'Google serves different results to users in different countries. When someone in Nairobi searches "web developer", Google gives them results it calculates are most relevant to a Kenyan searching in Kenya. This means businesses with strong local signals — a Kenyan domain, a Nairobi address, Kenyan content, citations in Kenyan directories — rank above foreign competitors who may be technically stronger but geographically irrelevant.',
      },
      {
        type: 'paragraph',
        text: 'This is your advantage as a Kenyan business over foreign competitors. It is also your disadvantage relative to other well optimised Kenyan businesses. The goal is to be the most credible local option in your niche.',
      },
      {
        type: 'heading',
        text: 'Step One: Google Business Profile Is Not Optional',
      },
      {
        type: 'paragraph',
        text: 'Before you do anything else on this list, go to business.google.com and claim or create your Google Business Profile. This is free. It is the single highest impact action available to any Kenyan business for local search visibility.',
      },
      {
        type: 'paragraph',
        text: 'The Map Pack — the three business listings that appear above organic results when someone searches for a local service — receives more clicks than the number one organic result. If you are not in the Map Pack, you are starting the race from the second row.',
      },
      {
        type: 'list',
        items: [
          'Use your exact business name. No keyword stuffing.',
          'Add your precise Nairobi address and verify it by post.',
          'Select the most specific category that describes your business.',
          'Upload at least ten high quality photos of your premises, team, and work.',
          'Write a keyword rich description that naturally includes your city and service.',
          'Add your business hours and keep them accurate.',
          'Respond to every review, positive and negative, within 24 hours.',
        ],
      },
      {
        type: 'heading',
        text: 'Step Two: Target Kenya Specific Keywords',
      },
      {
        type: 'paragraph',
        text: 'Keyword research for Kenya is different from keyword research for the UK or USA. The search volumes are lower, the competition is lower, and the opportunities are more specific. A keyword that gets 50,000 searches per month in the UK might get 500 in Kenya. But those 500 are all potential clients in your market, and ranking for them is far easier.',
      },
      {
        type: 'subheading',
        text: 'The three keyword tiers for Kenyan businesses',
      },
      {
        type: 'list',
        items: [
          'Tier one: service plus city. "Web design Nairobi", "lawyer Westlands", "caterer Kilimani". These are high intent and relatively easy to rank for. Every page on your site should target at least one of these.',
          'Tier two: service plus county or region. "Web design Kenya", "construction company Mombasa", "SEO services East Africa". Broader reach, slightly more competitive.',
          'Tier three: problem based keywords. "Why is my website slow Kenya", "how to get more customers online Nairobi". These capture people at the research stage and establish you as an authority.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Do not ignore Swahili. A significant portion of Kenyan mobile searches happen in Swahili or in mixed Swahili and English. "Bei ya website Kenya" (price of website Kenya), "kutengeneza website" (building a website), "biashara online Kenya" (online business Kenya) are all real searches with real people behind them. A competitor who targets these while you do not is capturing clients you are not even aware of.',
      },
      {
        type: 'stat',
        stat: '31%',
        statLabel: 'of Kenyan mobile searches include Swahili words or phrases, even when the primary search intent is commercial.',
      },
      {
        type: 'heading',
        text: 'Step Three: Technical SEO for Kenyan Networks',
      },
      {
        type: 'paragraph',
        text: 'Google uses page speed as a ranking factor everywhere in the world. In Kenya, it is more important than almost anywhere else because the baseline network speed is lower. A site that loads in two seconds on Nairobi broadband may take six seconds on Safaricom 3G in Nakuru. Google knows this and factors it into local rankings.',
      },
      {
        type: 'list',
        items: [
          'Run your site through PageSpeed Insights and target a score above 90 on mobile. If you score below 70, fix this before anything else.',
          'Compress all images. A hero image should never exceed 150kb. Use WebP format where possible.',
          'Enable lazy loading for images below the fold.',
          'Use a CDN (Content Delivery Network). Vercel and Cloudflare both have free tiers that serve your site from servers closer to Nairobi.',
          'Ensure your site has HTTPS. Google Chrome marks HTTP sites as "Not Secure" and Google demotes them in rankings.',
        ],
      },
      {
        type: 'heading',
        text: 'Step Four: Create Content That Kenyan Searchers Actually Want',
      },
      {
        type: 'paragraph',
        text: 'Content is still the primary way Google decides who ranks for what. But not all content is equal. Generic content that could apply to any country in the world ranks for nothing in Kenya. Kenya specific content that addresses real Kenyan problems ranks for the specific terms Kenyan searchers use.',
      },
      {
        type: 'paragraph',
        text: 'Write blog articles that answer the questions your clients actually ask you. If a potential client calls and asks "how much does a website cost in Kenya?", that question deserves a full article on your blog. If they ask "can I accept M-Pesa payments on my website?", write that article. If they ask "how long does a website take to build?", write that article. Every question is a keyword. Every keyword is a potential client.',
      },
      {
        type: 'quote',
        text: 'The best keyword research tool available to a Kenyan business owner is their own phone. What do you search for when you need services like yours?',
      },
      {
        type: 'heading',
        text: 'Step Five: Build Kenya Specific Backlinks',
      },
      {
        type: 'paragraph',
        text: 'A backlink is a link from another website to yours. Google treats backlinks as votes of confidence. A link from a respected Kenyan news site or business directory is worth far more to your local rankings than a link from a generic global directory.',
      },
      {
        type: 'list',
        items: [
          'List your business on Mocality, Kenya Yellow Pages, and BrighterMonday where relevant.',
          'Get featured in a Kenyan business publication. Standard Media, Business Daily, and Kenyan startup blogs all publish guest content.',
          'Partner with complementary Nairobi businesses for cross referrals and link exchanges.',
          'Sponsor a local event and get listed on the event website.',
          'Join your relevant industry association in Kenya and ensure you are listed in their member directory.',
        ],
      },
      {
        type: 'heading',
        text: 'The Timeline: What to Expect',
      },
      {
        type: 'paragraph',
        text: 'I am going to be honest with you about timelines because too many SEO providers in Kenya promise overnight results that do not exist.',
      },
      {
        type: 'list',
        items: [
          'Month one: Technical fixes, Google Business Profile setup, on page SEO. You will see minor movement in rankings.',
          'Month two: Content publishing begins, local citations built, first backlinks acquired. Rankings start moving meaningfully.',
          'Month three: Consistent content, growing backlink profile, Google begins to trust your site. Page one visibility for long tail keywords.',
          'Month four to six: Sustained effort compounds. Page one for primary keywords becomes realistic for most Kenyan niches.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Anyone who tells you they can get you to number one in two weeks is either lying or planning to use tactics that will eventually get your site penalised. Real SEO takes three to six months. The results last for years.',
      },
    ],
  },
  {
    slug: 'mpesa-integration-ecommerce',
    title: 'M-Pesa Integration: What Every Kenyan E-Commerce Site Needs',
    excerpt:
      'Over 90% of Kenyan online transactions happen via M-Pesa. Here is what you need to know before launching your store.',
    date: '2026-05-08',
    readTime: '6 min',
    category: 'E-Commerce',
    author: 'Dennis  Mlachake',
    content: [
      {
        type: 'paragraph',
        text: 'There is a single fact about Kenyan e-commerce that overrides every other consideration when you are building an online store: if your website does not accept M-Pesa, you are excluding the majority of your potential customers before they even get to the checkout.',
      },
      {
        type: 'stat',
        stat: '94%',
        statLabel: 'of digital payments in Kenya are processed through M-Pesa. No other payment method comes close.',
      },
      {
        type: 'paragraph',
        text: 'This is not a preference. It is infrastructure. M-Pesa is how Kenyans pay for everything from matatu fare to university fees to government services. When a Kenyan consumer lands on your online store and does not see the M-Pesa option at checkout, the instinctive response is not to find another payment method. It is to leave and find a store that does accept it.',
      },
      {
        type: 'paragraph',
        text: 'I have built e-commerce platforms that process hundreds of M-Pesa transactions weekly. Here is everything a Kenyan business owner needs to understand before launching an online store.',
      },
      {
        type: 'heading',
        text: 'How M-Pesa Integration Actually Works',
      },
      {
        type: 'paragraph',
        text: 'M-Pesa payments on websites are processed through the Safaricom Daraja API. Daraja is the developer gateway that Safaricom built to allow businesses to programmatically send and receive M-Pesa payments. It is powerful, well documented, and reliable. It is also not trivial to set up correctly.',
      },
      {
        type: 'subheading',
        text: 'The two primary payment flows',
      },
      {
        type: 'list',
        items: [
          'STK Push (Lipa Na M-Pesa Online): This is the preferred method for e-commerce. The customer enters their phone number on your website, clicks pay, and immediately receives a push notification on their phone prompting them to enter their M-Pesa PIN. The payment is completed without the customer leaving your website. The conversion rate for STK Push is significantly higher than manual payments because the friction is minimal.',
          'Paybill or Till Number: The customer manually initiates a payment from their M-Pesa menu, enters your Paybill number and account number, and sends the payment. Your site then needs to listen for the payment confirmation via a callback URL. This method works but introduces friction and increases the chances of payment errors.',
        ],
      },
      {
        type: 'paragraph',
        text: 'For any serious e-commerce platform, STK Push is the correct implementation. The difference in conversion rates between a well implemented STK Push checkout and a manual Paybill checkout is significant.',
      },
      {
        type: 'heading',
        text: 'What You Need Before You Can Go Live',
      },
      {
        type: 'paragraph',
        text: 'The Safaricom onboarding process has specific requirements that many businesses discover too late in the project timeline. Understanding these early prevents delays.',
      },
      {
        type: 'list',
        items: [
          'A registered Kenyan business. Safaricom requires a certificate of incorporation or business registration. Sole proprietors can register through the Huduma Centre.',
          'A Safaricom Business Till or Paybill number. If you do not already have one, the application takes five to ten business days to process.',
          'A live, HTTPS website. Safaricom will not approve a Daraja integration for a website that is not yet deployed and accessible publicly.',
          'Daraja API credentials. Once your business account is verified, you apply for API credentials through the Safaricom developer portal.',
          'A callback URL on your server. This is the endpoint on your website that receives payment confirmation from Safaricom. It must be publicly accessible and secure.',
        ],
      },
      {
        type: 'quote',
        text: 'Plan six to eight weeks for the full Safaricom onboarding process if you are starting from scratch. Build this into your launch timeline.',
      },
      {
        type: 'heading',
        text: 'The Technical Implementation: What Your Developer Needs to Build',
      },
      {
        type: 'paragraph',
        text: 'I am going to give you the non technical version of what a proper M-Pesa integration requires, so that you can have an informed conversation with any developer you work with.',
      },
      {
        type: 'list',
        items: [
          'Access token generation: The Daraja API requires an access token for every request. Your server needs to generate and cache this token automatically.',
          'STK Push initiation: When the customer clicks Pay, your server sends a request to Daraja with the customer phone number, amount, and your Paybill details.',
          'Callback handler: Safaricom sends a confirmation or failure message to your callback URL within seconds of the customer confirming payment. Your server must process this and update the order status.',
          'Order management: The payment confirmation must be linked to the correct order in your database so that fulfilment can begin automatically.',
          'Error handling: M-Pesa payments can fail for many reasons — insufficient funds, wrong PIN, network timeout. Your checkout must handle these gracefully and communicate clearly to the customer.',
        ],
      },
      {
        type: 'heading',
        text: 'Common Mistakes That Kill Kenyan E-Commerce Conversions',
      },
      {
        type: 'list',
        items: [
          'No M-Pesa at all. Still the most common and most damaging mistake.',
          'Manual payment instructions only. Asking customers to send money and share a screenshot adds friction that loses sales.',
          'No payment confirmation feedback. If the customer pays and the website does not immediately confirm receipt, they call your phone, email you, and sometimes charge back. Instant order confirmation emails and SMS are essential.',
          'Accepting only card payments. Card penetration in Kenya is low. A checkout that only offers Visa and Mastercard is optimised for the minority of your potential customers.',
          'No refund process. M-Pesa refunds are manual. Having a clear, published refund policy builds the trust needed for first time buyers to complete a purchase.',
        ],
      },
      {
        type: 'heading',
        text: 'Beyond M-Pesa: Building a Complete Kenyan Payment Stack',
      },
      {
        type: 'paragraph',
        text: 'M-Pesa is the foundation, but a mature Kenyan e-commerce platform should also consider additional payment options for specific customer segments.',
      },
      {
        type: 'list',
        items: [
          'Airtel Money: Airtel is the second largest mobile money network in Kenya. For businesses with rural customer bases, Airtel Money integration captures customers who are not on Safaricom.',
          'Card payments via Pesapal or Flutterwave: Corporate clients and international shoppers prefer card payments. A payment gateway like Pesapal handles both M-Pesa and card in a single integration.',
          'Bank transfer for high value orders: For orders above KSh 150,000 where M-Pesa transaction limits apply, bank transfer instructions should be available.',
        ],
      },
      {
        type: 'heading',
        text: 'The Business Case for Getting This Right',
      },
      {
        type: 'paragraph',
        text: 'Mkulima Sharp, one of the platforms we built, went from zero to hundreds of weekly M-Pesa transactions within the first month of launch. The technical integration took two weeks to build and test. The revenue it unlocked was immediate and compounding.',
      },
      {
        type: 'paragraph',
        text: 'Getting M-Pesa integration right is not a nice to have for a Kenyan e-commerce business. It is the difference between a business that works and a website that does not.',
      },
    ],
  },
  {
    slug: 'website-mistakes-kenyan-smes',
    title: '7 Website Mistakes Killing Kenyan SME Conversions',
    excerpt:
      'From slow load times on 3G to missing WhatsApp buttons. These are the mistakes costing Kenyan businesses real revenue.',
    date: '2026-05-10',
    readTime: '6 min',
    category: 'Conversion Optimisation',
    author: 'Dennis  Mlachake',
    content: [
      {
        type: 'paragraph',
        text: 'I review a lot of Kenyan business websites. Law firms, restaurants, construction companies, tour operators, NGOs. And across almost every sector, I see the same mistakes repeated so consistently that I have started to think of them as a checklist. If your website makes even three of these seven mistakes, you are losing clients every single day to competitors who have solved them.',
      },
      {
        type: 'paragraph',
        text: 'The good news is that every mistake on this list is fixable. Most of them are fixable in less than a week. Some of them cost nothing to fix at all.',
      },
      {
        type: 'heading',
        text: 'Mistake One: Your Site Takes More Than Three Seconds to Load on Mobile',
      },
      {
        type: 'stat',
        stat: '53%',
        statLabel: 'of mobile users abandon a website that takes more than three seconds to load. On Kenyan 3G, this affects the majority of your visitors.',
      },
      {
        type: 'paragraph',
        text: 'Go to pagespeed.web.dev right now and enter your website URL. Select the mobile tab. If your score is below 70, your website is actively driving visitors away before they have even seen your homepage.',
      },
      {
        type: 'paragraph',
        text: 'The most common causes of slow Kenyan websites are oversized images, too many plugins (on WordPress sites), unoptimised hosting, and hero videos that autoplay on mobile. Each of these is fixable. None of them require a full rebuild.',
      },
      {
        type: 'heading',
        text: 'Mistake Two: No WhatsApp Button',
      },
      {
        type: 'paragraph',
        text: 'WhatsApp is how Kenyans do business. It is how deals are initiated, how questions are answered, and increasingly how payments are arranged. A potential client who cannot immediately start a WhatsApp conversation from your website will not hunt for your number, copy it to their contacts, and call you. They will leave and find a competitor whose website has a green WhatsApp button in the corner.',
      },
      {
        type: 'paragraph',
        text: 'The fix takes thirty minutes. Add a floating WhatsApp button to every page of your website. Link it to wa.me/your number with a pre filled message like "Hi, I am interested in your services." Every month that button is live, it generates conversations that convert to clients.',
      },
      {
        type: 'quote',
        text: 'In Kenya, a WhatsApp button is not a nice to have feature. It is the most important conversion element on your website.',
      },
      {
        type: 'heading',
        text: 'Mistake Three: Your Contact Form Is the Only Way to Reach You',
      },
      {
        type: 'paragraph',
        text: 'Contact forms have a trust problem in Kenya. Consumers have been burned too many times by forms that went nowhere. They fill in the form, hear nothing for three days, and assume the business is unreliable. Even if you respond within an hour, the perception has already been formed.',
      },
      {
        type: 'paragraph',
        text: 'Your website should offer at minimum three ways to contact you: a phone number that is clickable on mobile, a WhatsApp link, and an email address. The contact form can exist as a fourth option but should never be the primary or only option. Put your phone number in the top right corner of your navbar where it is visible on every page.',
      },
      {
        type: 'heading',
        text: 'Mistake Four: No Google Maps Listing or Embedded Map',
      },
      {
        type: 'paragraph',
        text: 'For any business with a physical location in Kenya, not appearing on Google Maps is a critical visibility gap. When someone searches "hardware store near me" in Nairobi, Google returns a map with pins. If your pin is not there, you are invisible for what is often the highest intent search a potential customer makes.',
      },
      {
        type: 'list',
        items: [
          'Claim your Google Business Profile if you have not already.',
          'Verify your address by requesting a postcard from Google.',
          'Embed a Google Map of your location on your Contact page.',
          'Add detailed directions in text form for customers navigating in areas where map data is sparse.',
        ],
      },
      {
        type: 'heading',
        text: 'Mistake Five: Content Written for You, Not for Your Customer',
      },
      {
        type: 'paragraph',
        text: 'Open your website homepage right now. Count how many times the first paragraph uses the word "we" versus the word "you". If "we" appears more than "you", your homepage is written about your business rather than for your customer.',
      },
      {
        type: 'paragraph',
        text: 'Kenyan consumers, like consumers everywhere, have one question when they land on your website: "Can this business solve my problem?" They do not care that you were founded in 2015 or that you have a passionate team. They care whether you understand their problem and can fix it faster, better, or cheaper than anyone else.',
      },
      {
        type: 'paragraph',
        text: 'Rewrite your homepage headline to speak directly to the client\'s outcome. "We provide quality construction services in Nairobi" becomes "Your Nairobi project, delivered on time and on budget." The second version is about the customer. The first is about you.',
      },
      {
        type: 'heading',
        text: 'Mistake Six: No Social Proof',
      },
      {
        type: 'paragraph',
        text: 'Trust is the primary conversion barrier for Kenyan online consumers. The question running through every potential client\'s mind when they land on your website is: "Is this business legitimate and will they deliver what they promise?"',
      },
      {
        type: 'paragraph',
        text: 'Social proof answers that question without you having to say anything. Client testimonials, case studies with real numbers, logos of organisations you have worked with, photos of completed projects with client names attached — all of these do the trust building work that your sales copy cannot do alone.',
      },
      {
        type: 'list',
        items: [
          'Ask your three best clients for a written testimonial. Offer to draft it for them and ask them to approve it.',
          'Display your Google review rating prominently. If you have fewer than ten Google reviews, make getting reviews your priority this week.',
          'If you have worked with recognised Kenyan brands, organisations, or government bodies, display their logos.',
          'Before and after is powerful for service businesses. Show what you started with and what you delivered.',
        ],
      },
      {
        type: 'heading',
        text: 'Mistake Seven: Your Website Is Not Designed for the Kenyan Mobile Screen',
      },
      {
        type: 'paragraph',
        text: 'Responsive design means your website adapts to different screen sizes. But responsive design built to look good on a European or American audience\'s phones does not automatically look good on the most common Kenyan phones.',
      },
      {
        type: 'paragraph',
        text: 'The most popular smartphones in Kenya are mid range Android devices with screens between 5.5 and 6.7 inches. Text that is readable on a Samsung Galaxy S24 at 1440p may be too small on a Tecno Spark at 720p. Buttons that are easy to tap on a new iPhone may be too small on a Itel P55. Your website should be tested on actual mid range Android devices, not just on Chrome\'s mobile emulator on a laptop.',
      },
      {
        type: 'stat',
        stat: '78%',
        statLabel: 'of Kenyan smartphone users own an Android device. Test your website on Android before you launch.',
      },
      {
        type: 'paragraph',
        text: 'Ask your web developer to test your site on a physical Tecno or Itel device before signing off on any project. If they cannot do this, they are not building for the Kenyan market.',
      },
      {
        type: 'heading',
        text: 'The Common Thread',
      },
      {
        type: 'paragraph',
        text: 'Every mistake on this list has the same root cause: the website was built without the Kenyan customer at the centre of every decision. A fast, mobile first website with a prominent WhatsApp button, multiple contact options, strong social proof, and customer focused copy is not complicated to build. But it requires someone who understands the Kenyan market to make the right calls.',
      },
      {
        type: 'paragraph',
        text: 'If your current website makes any of these mistakes, the conversation to have with your developer starts with this list. If your developer does not recognise these as problems, it may be time to find a developer who does.',
      },
    ],
  },
]