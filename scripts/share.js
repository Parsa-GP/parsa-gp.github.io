
twitter = document.getElementsByClassName("twitter")[0]
facebook = document.getElementsByClassName("facebook")[0]
reddit = document.getElementsByClassName("reddit")[0]
hackernews = document.getElementsByClassName("hackernews")[0]
linkedin = document.getElementsByClassName("linkedin")[0]
email = document.getElementsByClassName("email")[0]

url = window.location.href

twitter.href = "https://twitter.com/share?url="+url+"&text=This+article+BANGS!&via=MyUsername"
facebook = "https://www.facebook.com/sharer/sharer.php?u="+url+""
reddit = "https://reddit.com/submit?url="+url+"&title=This+article+BANGS!"
hackernews = "https://news.ycombinator.com/submitlink?u="+url+"&t=This+article+BANGS!"
linkedin = "https://www.linkedin.com/shareArticle?url="+url+"&title=This+article+BANGS!"
email = "mailto:?subject=This+article+BANGS!&body="+url+"</URL>"


