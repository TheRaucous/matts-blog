import Script from "next/script"

export default function TwitterFeed({username}) {
    return (
      <>
        <a href="https://x.com/babygravy9" data-height="400" target="_blank" rel="noreferrer">
          Tweets by the raw egg
        </a>
        <Script src="https://platform.x.com/widgets.js" strategy="lazyOnload"/>
      </>
    )

  // return (
  //   <div>
  //     <a
  //       className="twitter-timeline"
  //       data-tweet-limit="10"
  //       data-theme="light"
  //       data-chrome="noheader nofooter"
  //       href={`https://twitter.com/${username}`}
  //     >
  //       Tweets by {username}
  //     </a>
  //     <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload"/>

  //   </div>
  // )
}
