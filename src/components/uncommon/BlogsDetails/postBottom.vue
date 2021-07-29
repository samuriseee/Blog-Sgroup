<template>
  <div class="container">
      <div class="share-buttons">
        <a href="">
            <i class="fab fa-facebook"></i>
            <span>Share on Facebook</span>
        </a>
        <a href="">
            <i class="fab fa-twitter"></i>
            <span>Share on Twitter</span>
        </a>
      </div>
      <ul class="post-meta__tags">
          Tags: 
          <li><a href=""> remote work </a></li>
          <li><a href=""> distributed teams </a></li>
      </ul>
    <!-- animated eyes -->
      <aside class="further-reading"> 
          <div class="further-reading__eyes">
              <div class="further-reading__eyes__eye">
                  <div class="further-reading__eyes__iris"></div>
              </div>
              <div class="further-reading__eyes__eye">
                  <div class="further-reading__eyes__iris"></div>
              </div>
          </div>
      </aside>
	<h2 class="further-reading__heading">What to read next?</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
.share-buttons{
    width: 100%;
    a {
        width:50%;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Basis Grotesque Pro', sans-serif;
        color: $black;
        text-decoration: none;
        text-align: center;
        border-left: 1px solid $white;
    }
}
.further-reading {
	position: relative;
	margin: 0 auto;
	padding-top: 4rem;
	border-top: 2px solid $black;
}

.further-reading__heading {
	margin-bottom: -2rem;
	text-align: center;
}

.further-reading__eyes {
	display: flex;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
}

.further-reading__eyes__eye {
	position: relative;
	display: inline-block;
	height: 3.875rem;
	width: 2.75rem;
	background: $white;
	border: 2px solid $black;
	border-radius: 50%;
}

.further-reading__eyes__eye:last-of-type {
	margin-left: -.5rem;
	transform: translateY(-1px);
}

.further-reading__eyes__eye:last-of-type .further-reading__eyes__iris {
	bottom: calc(.325rem - 1px);
}

.further-reading__eyes__iris {
	position: absolute;
	bottom: .325rem;
	left: calc(50% - .5rem);
	width: 1rem;
	height: 1.5rem;
	background: $black;
	border-radius: 50%;
	animation: furtherReading 3s infinite;
	animation-timing-function: linear;
}

@keyframes furtherReading {
	0% {
		transform: translate(-25%, 0);
	}
	47.5% {
		transform: translate(0, 1px);
	}
	95% {
		transform: translate(25%, 0);
	}
	100% {
		transform: translate(-25%, 0);
	}
}

.post-meta__tags {
	display: flex;
	justify-content: flex-start;
	padding: 2rem 0 1.875rem;
	font-weight: 700;
	font-family: 'Basis Grotesque Pro', sans-serif;
	letter-spacing: 0.03em;
}

.post-meta__tags li {
	display: inline-flex;
}

.post-meta__tags li:after {
	content: ", ";
}

.post-meta__tags li:last-of-type:after {
	content: "";
}

.post-meta__tags li a {
	color: $black;
}
</style>