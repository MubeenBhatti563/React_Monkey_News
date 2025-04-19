import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class NewsComponents extends Component {
    articles = [

        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "Craig Wright Faces Perjury Investigation Over Claims He Created Bitcoin",
            "description": "By order of a UK judge, Craig Wright can no longer claim he is the creator of bitcoin and now faces the prospect of criminal charges.",
            "url": "https://www.wired.com/story/craig-wright-perjury-bitcoin-trial/",
            "urlToImage": "https://media.wired.com/photos/6696630a5d2d61e4805c3175/191:100/w_1280,c_limit/GettyImages-1979197796.jpg",
            "publishedAt": "2024-07-16T12:58:12Z",
            "content": "A judge in the UK High Court has directed prosecutors to consider bringing criminal charges against computer scientist Craig Wright, after ruling that he lied extensively and repeatedly and committed… [+2851 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "A Tiny Texas Village Is About To Annex a Gigantic Bitcoin Mine",
            "description": "In a roundabout bid to win public opinion (and a juicy tax abatement,) Riot Platforms is preparing for its prized bitcoin mine to be annexed by a miniscule village in rural Texas.",
            "url": "https://www.wired.com/story/a-tiny-texas-hamlet-is-about-to-annex-an-industrial-scale-bitcoin-mine/",
            "urlToImage": "https://media.wired.com/photos/66958525a54303f24cdd6052/191:100/w_1280,c_limit/Texas-Annex-Bitcoin-Business-1288216977.jpg",
            "publishedAt": "2024-07-16T11:30:00Z",
            "content": "In Oak Valley, a sleepy village in rural Navarro County, Texas, there is very little of anything. A potholed track runs through its two square miles of sun-beaten grassland, past a modest prefab comm… [+3234 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Makena Kelly",
            "title": "Silicon Valley Hasn’t Embraced Trump. But It’s Wavering on Biden",
            "description": "Venture capitalists on both sides of the aisle suggest Silicon Valley is more anti-Biden than it is pro-Trump.",
            "url": "https://www.wired.com/story/silicon-valley-crypto-trump-biden-debate/",
            "urlToImage": "https://media.wired.com/photos/668d715c9004df7e67a59acd/191:100/w_1280,c_limit/Silicon-Valley-Trump-Biden-Politics.jpg",
            "publishedAt": "2024-07-11T09:30:00Z",
            "content": "The June fundraiser set off alarm bells suggesting that a new political movement needed to be accounted for, but little in the records of its organizers suggests deep fealty to MAGA doctrine. Palihap… [+3700 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Mt. Gox to repay investors in Bitcoin",
            "description": "Mt. Gox, once the world’s leading Bitcoin (BTC) exchange, is set to begin repaying investors using Bitcoin and Bitcoin Cash (BCH).… Continue reading Mt. Gox to repay investors in Bitcoin\nThe post Mt. Gox to repay investors in Bitcoin appeared first on ReadWri…",
            "url": "https://readwrite.com/mt-gox-to-repay-investors-in-bitcoin/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/97b8c89d-4828-4803-b037-04d74e631a19.webp",
            "publishedAt": "2024-07-08T16:29:11Z",
            "content": "Mt. Gox, once the world’s leading Bitcoin (BTC) exchange, is set to begin repaying investors using Bitcoin and Bitcoin Cash (BCH).\r\nThe repayment was announced on July 5 over a decade after Mt. Gox’s… [+2101 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Mt Gox Begins Creditor Repayments in Bitcoin and Bitcoin Cash",
            "description": "The rehabilitation trustee of Mt. Gox, the defunct cryptocurrency exchange, announced on Friday that it has initiated repayments to some… Continue reading Mt Gox Begins Creditor Repayments in Bitcoin and Bitcoin Cash\nThe post Mt Gox Begins Creditor Repayments…",
            "url": "https://readwrite.com/mt-gox-begins-creditor-repayments-in-bitcoin-and-bitcoin-cash/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/f7241310-8110-4543-8b45-18d74cf08d80.webp",
            "publishedAt": "2024-07-05T11:01:57Z",
            "content": "The rehabilitation trustee of Mt. Gox, the defunct cryptocurrency exchange, announced on Friday that it has initiated repayments to some creditors in Bitcoin (BTC) and Bitcoin Cash (BCH). These repay… [+2235 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "German government continues Bitcoin transfers to exchanges",
            "description": "On Tuesday (July 9), the German government transferred $339.2 million worth of Bitcoin (BTC) to various centralized crypto exchanges and… Continue reading German government continues Bitcoin transfers to exchanges\nThe post German government continues Bitcoin …",
            "url": "https://readwrite.com/german-government-continues-bitcoin-transfers-to-exchanges/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/7bb172ea-9e63-4949-8eb9-bf3760dbda31.webp",
            "publishedAt": "2024-07-10T10:50:02Z",
            "content": "On Tuesday (July 9), the German government transferred $339.2 million worth of Bitcoin (BTC) to various centralized crypto exchanges and market makers, following significant transfers the previous da… [+1883 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin 2024 announces Donald Trump as speaker",
            "description": "The upcoming Bitcoin 2024 conference in Nashville, Tennessee, has added former U.S. President Donald Trump to its roster of speakers.… Continue reading Bitcoin 2024 announces Donald Trump as speaker\nThe post Bitcoin 2024 announces Donald Trump as speaker appe…",
            "url": "https://readwrite.com/bitcoin-2024-announces-donald-trump-as-speaker/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/b5c05c2f-24d0-46fb-bbc1-9f7f96fe7e38.webp",
            "publishedAt": "2024-07-11T16:19:23Z",
            "content": "The upcoming Bitcoin 2024 conference in Nashville, Tennessee, has added former U.S. President Donald Trump to its roster of speakers.\r\nScheduled for July 25-27, this event is among the largest global… [+1535 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Mt. Gox moves nearly $2.7 billion in bitcoin, signaling anticipated payouts",
            "description": "On Tuesday, a significant Bitcoin (BTC) movement occurred from addresses associated with Mt. Gox, the defunct cryptocurrency exchange. At 8:12… Continue reading Mt. Gox moves nearly $2.7 billion in bitcoin, signaling anticipated payouts\nThe post Mt. Gox moves…",
            "url": "https://readwrite.com/mt-gox-bitcoin-payments-address-kraken-distributions/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/20b483a8-0d32-421a-93f8-3d2ce080557d.webp",
            "publishedAt": "2024-07-16T21:12:27Z",
            "content": "On Tuesday, a significant Bitcoin (BTC) movement occurred from addresses associated with Mt. Gox, the defunct cryptocurrency exchange.\r\nAt 8:12 a.m. UTC, over 48,641 BTC (valued at $3.1 billion) was … [+2028 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin slumps below $59,000 amid market uncertainty",
            "description": "Bitcoin’s (BTC) value dropped below $59,000 on Thursday, trading at $58,827. Market data shows that Bitcoin has fallen 3.38% in… Continue reading Bitcoin slumps below $59,000 amid market uncertainty\nThe post Bitcoin slumps below $59,000 amid market uncertaint…",
            "url": "https://readwrite.com/bitcoin-slumps-below-59000-amid-market-uncertainty/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/ac64595c-37b6-452e-a1b5-541f05c92c0a.webp",
            "publishedAt": "2024-07-04T12:50:07Z",
            "content": "Bitcoin’s (BTC) value dropped below $59,000 on Thursday, trading at $58,827.\r\nMarket data shows that Bitcoin has fallen 3.38% in the past day, reaching its lowest point since early May despite expect… [+1999 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin transaction cost hits four-year low",
            "description": "On July 7, the average cost per Bitcoin (BTC) transaction fell to its lowest level in four years, reaching $38.69,… Continue reading Bitcoin transaction cost hits four-year low\nThe post Bitcoin transaction cost hits four-year low appeared first on ReadWrite.",
            "url": "https://readwrite.com/bitcoin-transaction-cost-hits-four-year-low/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/c60cdffa-11df-4958-9ab7-799e5704104f.webp",
            "publishedAt": "2024-07-10T11:21:16Z",
            "content": "On July 7, the average cost per Bitcoin (BTC) transaction fell to its lowest level in four years, reaching $38.69, according to Blockchain.com.\r\nThis figure was last seen during the peak of the COVID… [+2079 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Louisiana passes pro-Bitcoin, anti-CBDC crypto bill",
            "description": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin… Continue reading Louisiana passes pro-Bitcoin, anti-CBDC crypto bill\nThe post Louisiana passes pro-Bitcoin, anti-CBDC crypto bill appeared fi…",
            "url": "https://readwrite.com/louisiana-passes-pro-bitcoin-anti-cbdc-crypto-bill/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6f67013b-b8ea-44cb-a656-b32460a85347.webp",
            "publishedAt": "2024-06-26T13:29:43Z",
            "content": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin Rights” bill.\r\nThe legislation, set to take effect on August 1, 2024, marks a sign… [+2341 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Oliver Haslam",
            "title": "Apple's Big M3 Macbook Air Discounts From Prime Day Are Still Here for Now",
            "description": "A never before seen post-Prime Day sale and coupon combo slash $250 off the M3 MacBook Air.",
            "url": "https://www.cnet.com/deals/apples-big-m3-macbook-air-discounts-from-prime-day-are-still-here-for-now/",
            "urlToImage": "https://www.cnet.com/a/img/resize/9b41b5cd75776974f2596a80904c453f49061cf1/hub/2024/07/15/95339940-8acd-49af-ab90-9c4bd6e1d638/apple-m3-macbook-air.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-07-19T19:03:16Z",
            "content": "If you're looking for a new laptop, surely you've come across ones by Apple. The Apple M3 MacBook Air is a lightweight and powerful laptop that looks great at the same time. Usually these are pretty … [+1452 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "CrowdStrike's rivals stand to benefit from its debacle",
            "description": "The CrowdStrike debacle — a bug in the company's Windows software that had the disastrous effect of rendering PCs unusable — has disrupted flights, canceled ...",
            "url": "https://techcrunch.com/2024/07/19/crowdstrikes-rivals-stand-to-benefit-from-its-debacle/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ZOqFm8TZLjOAdPKuE1EevQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/techcrunch_350/bb5508e1e6e2f7f4d0a8d2b20db578e7",
            "publishedAt": "2024-07-19T18:59:48Z",
            "content": "The CrowdStrike debacle a bug in the company's Windows software that had the disastrous effect of rendering PCs unusable has disrupted flights, canceled elective medical treatments, and left many an … [+4696 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "CrowdStrike chaos leads to grounded aircraft — and maybe an unusual weather effect",
            "description": "Air traffic for many airlines ground to a halt after a buggy update from CrowdStrike took down Windows computers around the world.  While the IT outage is...",
            "url": "https://techcrunch.com/2024/07/19/crowdstrike-chaos-leads-to-grounded-aircraft-and-maybe-an-unusual-weather-effect/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/5WMisBPPcFN8TbQP48ZgTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/techcrunch_350/73a40be283019aa44d290bca076da049",
            "publishedAt": "2024-07-19T17:48:26Z",
            "content": "Air traffic for many airlines ground to a halt after a buggy update from CrowdStrike took down Windows computers around the world. At the time of publication, nearly 3,500 flights have been canceled … [+4121 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Watch: GPT-4o mini is OpenAI’s latest AI model",
            "description": "OpenAI just launched GPT-4o mini, a new model that's supposed to be more than 60% cheaper than GPT 3.5 Turbo.",
            "url": "https://techcrunch.com/video/techcrunch-minute-openai-shrinks-its-flagship-model/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/07/YouTube-Thumb-Text-5.png?resize=1200,675",
            "publishedAt": "2024-07-19T16:01:30Z",
            "content": "OpenAI is launching a mini version of its latest AI model.\r\nThese small AI models are meant to be faster and more affordable than the full version making them particularly useful for simple, high-vol… [+885 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "The MacRumors Show: Talking Vision Pro and iOS 18 Beta",
            "description": "On this week's episode of The MacRumors Show, we revisit the experience of using Apple Vision Pro and talk through our first impressions of the iOS 18 public beta. \n\n\n\n\r\nSubscribe to The MacRumors Show YouTube channel for more videos\n\nApple's Vision Pro heads…",
            "url": "https://www.macrumors.com/2024/07/19/the-macrumors-show-talking-vision-pro/",
            "urlToImage": "https://images.macrumors.com/t/trHhR_avaV0FJUzNs9ul52CObvM=/2500x/article-new/2024/07/The-MacRumors-Show-Talking-Vision-Pro-and-iOS-18-Beta-Thumb-1.5.jpg",
            "publishedAt": "2024-07-19T16:59:34Z",
            "content": "On this week's episode of The MacRumors Show, we revisit the experience of using Apple Vision Pro and talk through our first impressions of the iOS 18 public beta. \r\nApple's Vision Pro headset is now… [+2427 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "NPR",
            "title": "USA Gymnastics made a miraculous comeback — but is it actually safer for Olympians?",
            "description": "In 2017, the Larry Nassar scandal rocked the Olympic community. <br><br>Hundreds of allegations of sexual abuse against the former USA Gymnastics doctor underscored how vulnerable athletes are — particularly when they're minors. <br><br>That year, Congress an…",
            "url": "https://www.npr.org/2024/07/19/1198912935/olympics-paris-2024-gymnastics-team-usa",
            "urlToImage": "https://media.npr.org/assets/img/2024/07/18/gettyimages-1167113914_wide-92803ffb83d7fbf6b35ca60359a97e9a5178cb21.jpg?s=1400&c=100&f=jpeg",
            "publishedAt": "2024-07-19T20:41:32Z",
            "content": "Simone Biles competes on the balance beam during the Senior Women's competition of the 2019 U.S. Gymnastics Championships.\r\nJamie Squire/Getty Images\r\nWith all the hype around USA Gymnastics heading … [+5422 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Jordan Hart",
            "title": "Why Apple doesn't suffer outages like this",
            "description": "An IT meltdown halted airlines, hospitals, and public transport. Here's why Apple devices remained operational during the global outage.",
            "url": "https://www.businessinsider.com/how-apple-survived-the-massive-crowdstrike-windows-it-outage-2024-7",
            "urlToImage": "https://i.insider.com/669a6b7280d4d5da13d54fd0?width=1200&format=jpeg",
            "publishedAt": "2024-07-19T16:35:29Z",
            "content": "Mac users are safe from the global IT outage.Monika Skolimowska/picture alliance/Getty Images\r\n<ul><li>Windows devices suffered a global outage, but Mac and Linux remain unaffected, CrowdStrike said.… [+1964 chars]"
        },

    ]
    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    constructor(props) {
        super(props);
        // console.log("Hello I'm Mubeen")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async update() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=629d03f96c6d4d70b28a13907dfe64ee&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url)
        this.props.setProgress(45)
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }
    async componentDidCatch() {
        this.update()
    }
    handleNextClock = (async () => {
        this.setState({ page: this.state.page + 1 })
        this.update();
    })
    handlePrevClock = (async () => {
        this.setState({ page: this.state.page - 1 })
        this.update();
    })
    mImage(url1, url2, url3,url4) {
        const images = [url1, url2, url3,url4];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }
     image1 = 'https://th.bing.com/th/id/OIP.G12T_MUuIKWw7XklDIqzhwHaE8?rs=1&pid=ImgDetMain'
     image2 = 'https://th.bing.com/th/id/OIP.pd3JWgnt-oOmO_6IN5kXRwHaFk?rs=1&pid=ImgDetMain'
     image3 = 'https://th.bing.com/th/id/R.e3fe4ef901759b2dc3de78b356b8fd43?rik=2rlh5iflkYesqQ&pid=ImgRaw&r=0'
     image4 = 'https://th.bing.com/th/id/R.c50921ba61e492a70fcfb98b6dfd7e7e?rik=OrvkhHJtk7G1ig&pid=ImgRaw&r=0'
    render() {
        return (
            <div className='container my-3' style={{ backgroundColor: "black", color: 'white' }}>
                <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop: '56px'}}>NewsMonkey - {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItems title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={!element.urlToImage ? this.mImage(this.image1,this.image2,this.image3,this.image4) : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClock} className="btn btn-dark mb-2">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClock} className="btn btn-dark mb-2">Next &rarr;</button>
                </div>
            </div>
        );
    }
}
