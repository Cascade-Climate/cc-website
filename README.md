# Cascade Climate Website

## For technical people:

This is a SvelteKit project with no extra libraries.
It is deployed on Vercel.

## For non-technical people:

This is a SvelteKit project. 
Don't worry if you don't know what that is, all of the code & content is written in plain HTML/CSS/Javascript, and there is plenty of documentation along with templates to copy/paste for adding new pages & content.

For any questions, concerns, or assistance, please do not hesitate to reach out to <lee.matthew.j.2001@gmail.com>. I am more than happy to help with getting a local environment set up, or making any additions, adjustments, or fixes to the site.

#### Editing & previewing

If you want to edit files in your browser and deploy them live directly, you can simply add/edit the files on GitHub.

However, if you want to edit files on your computer & preview them before they go live, you'll need to download the files using [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and run them using [npm](https://nodejs.org/en/download/).

You can download the files to you computer using the following Git command from the command line:

```bash
git clone https://github.com/Cascade-Climate/cc-website.git
```

A folder should be downloaded called `cc-website` that contains the site files.
From here, you can navigate to this folder and build the project using the following npm commands:

```bash
npm install
npm run dev -- --open
```

Once you've made your changes, you can use the following Git commands to push them live:

```bash
git add .
git commit -m 'Sample description of changes.'
git push
```

#### Navigating the project

All of the content for the website is contained within the `src` folder. The rest of the files are mostly for configuration and optimization of the code. `.svelte` files contain plain HTML/CSS/JavaScript combined into a single file.

- **lib**: Contains reused & shared data/configuration for the website.
	- **components**: Contains the HTML/CSS/Javascript for the header, footer, and navigation elements.
	- **images**: Contains all the images for the website. When uploading larger images to the site, consider converting them to the `.webp` file format, as this photo format is optimized for quicker load times. However, regular file formats like `.png` and `.jpeg` will still work just fine.
	- **config.json**: General configuration options for the site. Navigation links, newsletter link, and contact email are all defined here.
	- **theme.css**: This is where the color themes & fonts for the whole site are defined. Keep in mind that adding/adjusting fonts will require that the new font files are added to the `static/fonts` folder.

- **routes**: Contains the pages of the website. The structure is defined by the folder structure: `/routes/+page.svelte` contains the code for the <https://cascadeclimate.org> landing page; `routes/faq/+page.svelte` contains the code for the page <https://cascadeclimate.org/faq>; `routes/team/arielle-lok/+page.svelte` contains the code for the page <https://cascadeclimate.org/team/arielle-lok>, and so on.

#### Adding a new team member

To add a new team member, you'll need to create a new bio page as well as add a link to the team page.

To create a new bio page, simple copy & paste the `SAMPLE-TEAM-TEMPLATE` folder found in `src/routes/team`. Rename the duplicated folder to what the new sub-URL should be (e.g. `jane-doe`).

Then, update the `+page.svelte` file within the new folder with the new information (this includes adding their photo to the `src/lib/images/team` folder and updating the import on the first line). The template file is labelled with which lines will need to be updated with the corresponding information.

To add a new link from the team page to your newly-created bio page, navigate to the file `src/routes/team/+page.svelte`. First, import their profile photo to the file in the `<script>` tags at the start of the file. It should look something like this:
```jsx
import janeDoe from '$lib/images/team/jane-doe.webp';
```

Then, add a new element to the list in the appropriate section. Following our example above, it would look like this:
```jsx
<a class="team-card" href="/team/jane-doe">
	<img src={janeDoe} alt="Jane Doe" />
	<h1>Jane Doe</h1>
	<span>Chief Documentation Officer</span>
</a>
```

#### Adding a new blog post

To add a new blog post, you'll need to create a new blog post page as well as a link from the blog directory.

To create a new blog post page, simply copy & paste the `SAMPLE-BLOG-TEMPLATE` folder found in `src/routes/blog`. Rename the duplicated folder to what the new sub-URL should be (e.g. `sample-blog-post`).

Then, update the `+page.svelte` file within the new folder with the new blog content. For any images you want to insert into the post, you'll need to import them at the beginning of the file in the `<script>` tags. A sample image is imported for reference.

Once your blog post page is ready, you can add a link to it in the main blog index. Open `src/routes/blog/+page.svelte`, then add a new element to the list of blog posts. For our example above, it would look like this:
```jsx
<div class="post">
	<h1>
		<a href="/blog/sample-blog-post">
			Sample Blog Post
		</a>
	</h1>
	<p>
		This is a sample blog post. You can use this template to create new blog posts. Be sure to update the title, date, author, and content. You can also add links to other pages on the site, like the …
	</p>
	<p class="details">
		<span class="date">01/01/1970</span>
		·
		<span class="read-time">1 MIN READ</span>
	</p>
</div>
```

#### Editing the FAQ

To edit the FAQ, you can edit the code in `src/routes/faq/+page.svelte`. 

```jsx
<div class="faq-item">
	<button class="question" on:click={openAnswer}>
		<span>+</span>
		How can I add a new FAQ item?
</button>
	<div class="answer">
		<br />
		<p>
			You can add a new FAQ item by copy & pasting this code into the list of FAQ items.
		</p>
	</div>
</div>
```

#### Layout files

For the blog & team bio pages, shared styles are located in a shared `+layout.svelte` file rather than repeated across every blog/team page. If you're having trouble finding where a style for a page is located, be sure to double check the `+layout.svelte` files in the parent directory.

## Troubleshooting

Once again: for any questions, concerns, or assistance, please do not hesitate to reach out to <lee.matthew.j.2001@gmail.com>. I am more than happy to help with getting a local environment set up, or making any additions, adjustments, or fixes to the site.
