<template>
  <div class="container">
    <!-- <div @click="$router.push('/blogs/' + 0)" class="firstBlog">
      <img :src="blogs[0].thumbnail" class="mainPic" />
      <h1>
        {{ blogs[0].title }}
      </h1>
      <p style="font-size: 1.4rem;width:60%;margin:0 auto;">
        {{ blogs[0].content }}
      </p>
    </div> -->
    <div class="blogs">
      <h3>All articles</h3>

      <div class="grid2">
        <div
          v-for="blog in blogPosts"
          :key="'blog-' + blog.id"
          class="blogContent"
          @click="$router.push('/blogs/' + blog.id)"
        >
          <img :src="blog.blogCoverPhoto" />
          <p>{{ blog.createBlogTitle }}</p>
        </div>
      </div>
      <b-row>
        <b-col class="mt-3">
          <b-pagination
            @change="onPageChanged"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            pills
            align="center"
            class="my-0"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
const blogs = [
  {
    createdAt: "2020-10-07T05",
    author: "Lowell Little",
    avatar: "https://cdn.fakercloud.com/avatars/aluisio_azevedo_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/06/enable-focus-mode-gregorian-chant.gif",
    title:
      "Enable your focus mode by immersive Gregorian chants from the 17th century",
    content:
      "At some point, all instrumental music aiming for increasing focus starts to feel tedious. Classical piano, mellow beats, electronic music in general, even the Tibetan bowls, white noise and binaural beats become numb.",
    id: "0",
  },
  {
    createdAt: "2021-07-24T21",
    author: "Al Hoeger IV",
    avatar: "https://cdn.fakercloud.com/avatars/plbabin_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/05/design-system.gif",
    title: "Beatae minima at sit est ut ut ut quia.",
    content:
      "Sequi eveniet inventore est dolorem suscipit accusantium voluptas mollitia rem. Vel aut esse placeat. Voluptates nisi exercitationem voluptate ad deserunt amet nam aut quaerat.\n \rEveniet et at ut eos aut consequuntur provident sequi et. Aliquam neque eius similique totam et blanditiis. Qui omnis consectetur delectus dicta et consectetur id ab. Provident dolor dolorum labore quia magni perspiciatis quia.\n \rSed tempore eaque. Provident ut ad quae qui. Et ea velit pariatur vero corporis fuga.",
    id: "1",
  },
  {
    createdAt: "2021-07-24T19:24",
    author: "Sabrina Grady",
    avatar: "https://cdn.fakercloud.com/avatars/falconerie_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/05/benefits-of-not-choosing-your-characters-wisely.gif",
    title: "Totam consequatur enim dolorem.",
    content:
      "Sit quae repellat officia voluptas. Ipsum quod qui exercitationem provident dolorem ut debitis. Et ipsam sit ducimus et ex nihil similique voluptatum necessitatibus. Reiciendis tempora non et et. Quis necessitatibus corrupti veniam dolore ut odio sapiente.\n \rIn architecto nihil voluptas doloribus. Ut officiis quasi ut facere et molestiae. Consequatur magnam quasi. Dicta ex occaecati beatae delectus inventore sunt vero.\n \rAut doloremque minima inventore mollitia voluptates aut hic. Non non fuga nesciunt eos et placeat. Libero quos corrupti excepturi repudiandae voluptatum iste ut odio. Labore quis provident cum cupiditate. Laborum earum perferendis. Blanditiis sed recusandae omnis error possimus.",
    id: "2",
  },
  {
    createdAt: "2021-07-25T07",
    author: "Clinton Romaguera",
    avatar: "https://cdn.fakercloud.com/avatars/davidbaldie_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/05/horrors-of-remote-work.gif",
    title: "Rerum molestias ea voluptas nostrum assumenda quia optio possimus.",
    content:
      "Sunt fuga eaque velit animi enim. Voluptate dolorum blanditiis quo saepe quis rem. Voluptatem a minus molestiae ducimus vero vel a. Ducimus error quidem molestias voluptatem ab rerum voluptas.\n \rEa veritatis officia. In et hic non possimus. Velit quam libero et laboriosam velit dignissimos sit ut.\n \rDignissimos odit placeat nihil est praesentium occaecati voluptatibus autem. Voluptatum id consequatur aliquam quam odit quae eligendi. Aut architecto dolor nemo distinctio distinctio sint. Sit alias ut pariatur quia alias. Dolorum consectetur quia nihil aut. Ut id neque tempore veritatis at.",
    id: "3",
  },
  {
    createdAt: "2021-07-25T12",
    author: "Hope Lebsack MD",
    avatar: "https://cdn.fakercloud.com/avatars/brandonburke_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/05/someone-shared-a-google-doc.gif",
    title: "Qui modi ipsa et consequatur.",
    content:
      "Magni est necessitatibus aut. Et repudiandae voluptas eum voluptates maxime. Quis quisquam officia deleniti.\n \rQui nobis sit. Ducimus rerum quia minus nobis distinctio. Quis esse aut ipsam optio pariatur enim qui. Ut qui pariatur consequatur voluptatem. Dignissimos perferendis eos. Iure reprehenderit velit modi officiis.\n \rOfficiis blanditiis qui autem quis a fuga at. Et sunt recusandae et ipsa sit totam rem. Non et officia quia. Quos cum quia voluptate ut. Nulla porro assumenda odit. Minima temporibus officiis id dicta ut excepturi corrupti dolorem maiores.",
    id: "4",
  },
  {
    createdAt: "2021-07-25T12",
    author: "Guy Mraz",
    avatar: "https://cdn.fakercloud.com/avatars/andrewofficer_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/05/Remote-design-sprint-figma.png",
    title: "Qui aut libero libero omnis.",
    content:
      "Non adipisci id fugiat id in laboriosam. Esse mollitia minima. Corporis expedita odit velit necessitatibus sint mollitia fuga. Ut nulla ex quo assumenda voluptatem. Mollitia reprehenderit laborum sed sit ut impedit tempore sed.\n \rQuia corrupti laudantium. Voluptatem placeat et. Ea in aut sunt et ducimus sed facilis laboriosam quos. Vel optio est voluptatum expedita molestias in.\n \rMinima dolorem aut et fuga commodi quod eum consequatur. Dolor quis et. Odit fuga quod omnis. Ut ut molestiae. Ut in voluptatum earum ab incidunt consequatur libero dicta iste. Voluptatum ex aut dolor aut possimus esse.",
    id: "5",
  },
  {
    createdAt: "2021-07-25T07",
    author: "Rita Kilback",
    avatar: "https://cdn.fakercloud.com/avatars/n_tassone_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/05/six-findings-from-director-level-interviews-on-remote-work-1.gif",
    title: "Nesciunt ut eum pariatur atque voluptates.",
    content:
      "Et officia et voluptatem quia accusantium ea repellat. Consequatur vero quae atque eos cum nemo quia. Est consectetur iusto sed sed ut ut itaque labore. Possimus necessitatibus reiciendis ullam commodi quaerat quia consequatur ab. Quas sit vitae officia. Rerum eum id nihil voluptatem debitis voluptatem.\n \rEos perferendis ipsam quo dicta neque. Unde sed amet. Quis dolore laudantium recusandae incidunt illo atque autem error ducimus. Maxime culpa vitae aut autem. Et et aperiam vitae dolorum. Facere molestias ut ea dolor et repellendus.\n \rNeque veniam quidem aspernatur numquam. Voluptatibus asperiores excepturi. Sunt aut magni at enim modi sit provident unde animi.",
    id: "6",
  },
  {
    createdAt: "2021-07-24T22",
    author: "Glen Vandervort",
    avatar: "https://cdn.fakercloud.com/avatars/carlosm_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/04/benefits-of-distributed-teams.gif",
    title: "Placeat qui et.",
    content:
      "Incidunt quaerat iure nihil ut ipsam. Rerum ut quae mollitia aut dolor nobis non natus. Qui maxime fuga magni. Magnam cumque voluptas asperiores dolore. Quia deserunt error autem ex. Commodi veritatis ut sit.\n \rDolor quod dolor et est sit ut quae doloremque quasi. Porro impedit cumque quasi aspernatur. Veniam quo placeat iste nihil aut a omnis. Odit distinctio eligendi labore. Optio rerum adipisci. Temporibus culpa delectus quod unde quos enim nihil error.\n \rAt deleniti consequuntur omnis esse. Eos voluptatem dolorum reiciendis. Qui facere repellat. Voluptatem incidunt aperiam quas culpa.",
    id: "7",
  },
  {
    createdAt: "2021-07-24T23",
    author: "Eric Gutkowski",
    avatar: "https://cdn.fakercloud.com/avatars/jmillspaysbills_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/04/career-growth-distributed-team.gif",
    title:
      "Perferendis doloremque quod voluptatum distinctio quo asperiores et adipisci.",
    content:
      "A voluptas a provident eveniet dolorum aut nostrum sunt. Ullam architecto ut qui eum harum. Delectus voluptate aut et ad sed tempora enim eum. Non et tenetur quo. Est aut minima provident ut provident aliquid. Rerum error ut eos rem est quia voluptas error.\n \rAut eaque harum rerum similique quasi voluptatem non. Dolor ut magni. Quasi fugit enim nulla voluptatem doloremque enim. Laudantium eius non repellendus veritatis quia autem iure adipisci quibusdam. Quis veniam possimus vero et eius quae. Necessitatibus natus quia quia debitis recusandae harum amet.\n \rTotam itaque nihil nisi ea fugiat ullam iste quis. Illo ut consectetur et amet. Et numquam aut. Quis tempore porro nobis. Architecto aut ipsa blanditiis explicabo beatae dolores debitis.",
    id: "8",
  },
  {
    createdAt: "2021-07-25T06",
    author: "Ervin Swift I",
    avatar: "https://cdn.fakercloud.com/avatars/nemanjaivanovic_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/03/figma-blog-template-for-free-2.gif",
    title: "Ullam quo placeat sed nemo labore maiores consequatur excepturi.",
    content:
      "Doloribus dolorem quia ad quidem quis dolor ex. Non quia aut. Voluptas natus est sit qui laudantium doloribus. Quia occaecati impedit dolor numquam inventore qui nobis. Repellat unde culpa ut non. Perferendis esse aut rem nihil hic dolorum omnis eaque est.\n \rEaque sequi incidunt debitis minima explicabo qui nulla error. Officia ut ullam eum et aperiam perspiciatis ut dolores dolor. Magni est qui facere molestiae. Necessitatibus assumenda voluptate. A facilis sunt. Delectus qui est ipsum earum modi debitis.\n \rTempore veniam sit quis aut accusantium minus minima ea quod. Aut velit quae nesciunt rem ea ad dolore suscipit nisi. Alias est esse exercitationem ipsam et.",
    id: "9",
  },
  {
    createdAt: "2021-07-25T08",
    author: "Kristina Koepp",
    avatar: "https://cdn.fakercloud.com/avatars/iqonicd_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/03/modern-remote-working-tools.gif",
    title: "Cum quaerat aut laboriosam assumenda.",
    content:
      "Ullam qui qui et quo voluptas nostrum consequatur dolor qui. Eveniet maxime porro aut et nihil debitis qui non. Modi sint totam cumque illo eos reprehenderit dolore. Harum sint culpa sint. Dolores id ab id amet assumenda. Omnis amet occaecati quidem debitis at autem explicabo quia.\n \rSed ipsum numquam eum ut nemo necessitatibus consequatur praesentium. Doloribus ut sequi. Maiores pariatur soluta qui labore.\n \rQuaerat aut dignissimos voluptatum quod et. Nihil est aliquid beatae ex dolorem aut aliquid. Laboriosam sed quis et error. Quo voluptates repellendus temporibus laborum esse magni omnis illum.",
    id: "10",
  },
  {
    createdAt: "2021-07-25T00",
    author: "Norman Jerde I",
    avatar: "https://cdn.fakercloud.com/avatars/fiterik_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/03/remote-work-distributed-teams-sources.gif",
    title: "Ipsum natus asperiores sit odio.",
    content:
      "Quo sit minus atque eveniet tempore odio in rerum provident. Qui voluptate quia. Quod consequatur non non consequatur doloribus recusandae voluptas. Aut ab qui doloremque et enim dolore perferendis. Vel adipisci hic delectus quis. Temporibus inventore commodi dolor voluptas suscipit minima eaque explicabo.\n \rEx dolorem ea. Qui voluptates corporis optio maiores quis. Et dolor est aut ratione voluptas. Repellendus vero fuga non.\n \rInventore molestiae est. Eum aperiam maxime explicabo nihil magnam commodi. Occaecati id magnam ullam sunt veritatis quidem eaque.",
    id: "11",
  },
  {
    createdAt: "2021-07-25T07",
    author: "Tyrone Hoeger Jr.",
    avatar: "https://cdn.fakercloud.com/avatars/russell_baylis_128.jpg",
    thumbnail: "https://www.nordicrose.net/content/images/2020/03/hello2.gif",
    title: "Voluptatibus consequatur dolor harum qui.",
    content:
      "Repellendus omnis aut consectetur molestiae deleniti minus rem. Laboriosam sed sit itaque tempora dolorum cum ipsum quas. Fugit laborum eum et non accusantium et eum. Quis delectus architecto sint et rerum est. Sit similique voluptas recusandae ad. Dignissimos consequatur nostrum totam tempora quae ipsum ut.\n \rVoluptatum mollitia ratione ipsam qui. Maiores eum odit architecto magni quasi. Consequatur rem laboriosam voluptatum aut enim dolor molestiae unde. Animi provident minima soluta unde eveniet accusantium. Molestiae sunt asperiores eaque natus quas reiciendis eum esse.\n \rUt illum et sapiente aliquam molestiae. Aspernatur repudiandae ad eum perferendis reprehenderit temporibus soluta. Praesentium tempore sunt voluptate error optio minus ducimus qui aut.",
    id: "12",
  },
  {
    createdAt: "2021-06-05T16",
    author: "Ms. Sidney Gottlieb",
    avatar: "https://cdn.fakercloud.com/avatars/wikiziner_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/03/ghost-figma-publishing-cms-design.gif",
    title: "Eos minima est.",
    content:
      "Aut voluptas dolorum libero sed natus voluptas. Commodi molestiae maxime esse dicta officia in ipsam. Voluptates facilis rerum et accusamus quo quis quidem fuga. Eveniet ducimus sapiente ut earum autem sit et. Voluptates aut laudantium.\n \rDeserunt temporibus eius. Et voluptatem enim odio ipsam saepe. Ea officia qui aspernatur voluptatem aliquid.\n \rEnim quaerat omnis. Provident ut velit et distinctio ut iure quia et consequatur. Ab qui et nostrum eaque qui. Labore laudantium excepturi iste dolorem odio temporibus vel.",
    id: "13",
  },
  {
    createdAt: "2020-10-07T05",
    author: "Lowell Little",
    avatar: "https://cdn.fakercloud.com/avatars/aluisio_azevedo_128.jpg",
    thumbnail:
      "https://www.nordicrose.net/content/images/2020/03/offf-barcelona.jpg",
    title: "Corrupti et ut aut laborum repellendus esse saepe corporis aut.",
    content:
      "A praesentium voluptas officia occaecati dolor itaque quam. Et minus odit nisi. Delectus eius explicabo aut quas atque.\n \rQuae asperiores ut velit. Nisi aspernatur dolorum nihil quia iure praesentium. Rerum minus quo cupiditate quos. Ut molestiae ullam qui voluptas nemo aut vel. Totam magni officiis tempore magni qui amet assumenda nostrum. Vel dicta nulla et.\n \rSed ex ipsum numquam dolore alias qui. Et minima sit voluptatem beatae. Omnis voluptate nostrum dolore quis est nam expedita tempora. Corrupti dolorem officia ut numquam ratione debitis et dolores aut. Aut consequatur sunt sunt saepe ipsam sint et velit ab. Dolores magni sed.",
    id: "14",
  },
];

export default {
  name: "Blogs",
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
  data() {
    return {
      paginatedItems: blogs,
      currentPage: 1,
      perPage: 4,
      totalRows: blogs.length,
    };
  },
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.blogs;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
  mounted() {
    this.paginate(this.perPage, 0);
  },
};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
.container {
  margin-top: 5rem;
  text-align: center;
  .blogs {
    width: 65%;
    margin: 50px auto;
    border-top: 2px solid $black;
  }
  h1 {
    padding: 10px;
    margin: 0 auto;
    width: 80%;
    font-size: 3rem;
    font-weight: 700;
    @media only screen and (min-width: 300px) and (max-width: 780px) {
      font-size: 2rem;
      width: 100%;
    }
  }
  .mainPic {
    width: 80%;
    margin: 70px 0px;
  }
}
.blogs h3 {
  font-size: 2.5rem;
  font-weight: 700;
  transform: translate(0px, 50px);
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
  div {
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
    &:hover {
      transform: scale(1.06);
      transition: 0.3s ease-out;
      color: green;
    }
    p {
      width: 80%;
      margin: 0 auto;
      padding: 5px;
      font-size: 1.375rem;
      font-weight: 500;
    }
  }
}
.blogContent {
  img {
    width: 90%;
    height: 240px;
    margin: 70px 0px 10px 0px;
  }
}
.b-pagination-pills .page-item {
  .page-link {
    color: #000 !important;
    border-radius: 50rem !important;
    margin-left: 0.5rem;
    line-height: 1;
    font-size: 1.3rem !important;
    padding: 20px !important;
  }
}
.firstBlog {
  cursor: pointer;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.2s;
  &:hover {
    transform: scale(1.015);
    transition: 0.2s ease-in;
    color: green;
  }
}
</style>
