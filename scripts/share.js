
twitter = document.getElementsByClassName("twitter")[0]
facebook = document.getElementsByClassName("facebook")[0]
reddit = document.getElementsByClassName("reddit")[0]
hackernews = document.getElementsByClassName("hackernews")[0]
linkedin = document.getElementsByClassName("linkedin")[0]
email = document.getElementsByClassName("email")[0]

url = window.location.href

twitter.href = "https://twitter.com/share?url="+url+"&text=This+article+BANGS!"
facebook.href = "https://www.facebook.com/sharer/sharer.php?u="+url
reddit.href = "https://reddit.com/submit?url="+url+"&title=This+article+BANGS!"
hackernews.href = "https://news.ycombinator.com/submitlink?u="+url+"&t=This+article+BANGS!"
linkedin.href = "https://www.linkedin.com/shareArticle?url="+url+"&title=This+article+BANGS!"
email.href = "mailto:?subject=This+article+BANGS!&body="+url

