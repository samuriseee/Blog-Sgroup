<template>
  <div class="container">
    <img src="https://www.linkpicture.com/q/mainPic.png" class="mainPic" />
    <h1>
      A few words about this blog platform. Ghost, and how this site was made
    </h1>
    <span style="font-size: 1.3rem"
      >Why Ghost ($ Figma) instead of Medium, WordPress or other options?</span
    >
    <div class="blogs">
      <h3>All articles</h3>
      <div class="grid2">
        <div
          v-for="blog in paginatedItems"
          :key="'blog-' + blog.id"
          class="blogContent"
          @click="$router.push('/blogs/' + blog.id)"
        >
          <img :src="blog.thumbnail" />
          <p>{{ blog.title }}</p>
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
          createdAt: "2021-07-24T21:56:57.780Z",
          author: "Al Hoeger IV",
          avatar: "https://cdn.fakercloud.com/avatars/plbabin_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Beatae minima at sit est ut ut ut quia.",
          content:
            "Sequi eveniet inventore est dolorem suscipit accusantium voluptas mollitia rem. Vel aut esse placeat. Voluptates nisi exercitationem voluptate ad deserunt amet nam aut quaerat.\n \rEveniet et at ut eos aut consequuntur provident sequi et. Aliquam neque eius similique totam et blanditiis. Qui omnis consectetur delectus dicta et consectetur id ab. Provident dolor dolorum labore quia magni perspiciatis quia.\n \rSed tempore eaque. Provident ut ad quae qui. Et ea velit pariatur vero corporis fuga.",
          id: "1",
        },
        {
          createdAt: "2021-07-24T19:24:53.998Z",
          author: "Sabrina Grady",
          avatar: "https://cdn.fakercloud.com/avatars/falconerie_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Totam consequatur enim dolorem.",
          content:
            "Sit quae repellat officia voluptas. Ipsum quod qui exercitationem provident dolorem ut debitis. Et ipsam sit ducimus et ex nihil similique voluptatum necessitatibus. Reiciendis tempora non et et. Quis necessitatibus corrupti veniam dolore ut odio sapiente.\n \rIn architecto nihil voluptas doloribus. Ut officiis quasi ut facere et molestiae. Consequatur magnam quasi. Dicta ex occaecati beatae delectus inventore sunt vero.\n \rAut doloremque minima inventore mollitia voluptates aut hic. Non non fuga nesciunt eos et placeat. Libero quos corrupti excepturi repudiandae voluptatum iste ut odio. Labore quis provident cum cupiditate. Laborum earum perferendis. Blanditiis sed recusandae omnis error possimus.",
          id: "2",
        },
        {
          createdAt: "2021-07-25T07:22:56.760Z",
          author: "Clinton Romaguera",
          avatar: "https://cdn.fakercloud.com/avatars/davidbaldie_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title:
            "Rerum molestias ea voluptas nostrum assumenda quia optio possimus.",
          content:
            "Sunt fuga eaque velit animi enim. Voluptate dolorum blanditiis quo saepe quis rem. Voluptatem a minus molestiae ducimus vero vel a. Ducimus error quidem molestias voluptatem ab rerum voluptas.\n \rEa veritatis officia. In et hic non possimus. Velit quam libero et laboriosam velit dignissimos sit ut.\n \rDignissimos odit placeat nihil est praesentium occaecati voluptatibus autem. Voluptatum id consequatur aliquam quam odit quae eligendi. Aut architecto dolor nemo distinctio distinctio sint. Sit alias ut pariatur quia alias. Dolorum consectetur quia nihil aut. Ut id neque tempore veritatis at.",
          id: "3",
        },
        {
          createdAt: "2021-07-25T12:38:42.765Z",
          author: "Hope Lebsack MD",
          avatar: "https://cdn.fakercloud.com/avatars/brandonburke_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Qui modi ipsa et consequatur.",
          content:
            "Magni est necessitatibus aut. Et repudiandae voluptas eum voluptates maxime. Quis quisquam officia deleniti.\n \rQui nobis sit. Ducimus rerum quia minus nobis distinctio. Quis esse aut ipsam optio pariatur enim qui. Ut qui pariatur consequatur voluptatem. Dignissimos perferendis eos. Iure reprehenderit velit modi officiis.\n \rOfficiis blanditiis qui autem quis a fuga at. Et sunt recusandae et ipsa sit totam rem. Non et officia quia. Quos cum quia voluptate ut. Nulla porro assumenda odit. Minima temporibus officiis id dicta ut excepturi corrupti dolorem maiores.",
          id: "4",
        },
        {
          createdAt: "2021-07-25T12:47:28.528Z",
          author: "Guy Mraz",
          avatar: "https://cdn.fakercloud.com/avatars/andrewofficer_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Qui aut libero libero omnis.",
          content:
            "Non adipisci id fugiat id in laboriosam. Esse mollitia minima. Corporis expedita odit velit necessitatibus sint mollitia fuga. Ut nulla ex quo assumenda voluptatem. Mollitia reprehenderit laborum sed sit ut impedit tempore sed.\n \rQuia corrupti laudantium. Voluptatem placeat et. Ea in aut sunt et ducimus sed facilis laboriosam quos. Vel optio est voluptatum expedita molestias in.\n \rMinima dolorem aut et fuga commodi quod eum consequatur. Dolor quis et. Odit fuga quod omnis. Ut ut molestiae. Ut in voluptatum earum ab incidunt consequatur libero dicta iste. Voluptatum ex aut dolor aut possimus esse.",
          id: "5",
        },
        {
          createdAt: "2021-07-25T07:58:04.873Z",
          author: "Rita Kilback",
          avatar: "https://cdn.fakercloud.com/avatars/n_tassone_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Nesciunt ut eum pariatur atque voluptates.",
          content:
            "Et officia et voluptatem quia accusantium ea repellat. Consequatur vero quae atque eos cum nemo quia. Est consectetur iusto sed sed ut ut itaque labore. Possimus necessitatibus reiciendis ullam commodi quaerat quia consequatur ab. Quas sit vitae officia. Rerum eum id nihil voluptatem debitis voluptatem.\n \rEos perferendis ipsam quo dicta neque. Unde sed amet. Quis dolore laudantium recusandae incidunt illo atque autem error ducimus. Maxime culpa vitae aut autem. Et et aperiam vitae dolorum. Facere molestias ut ea dolor et repellendus.\n \rNeque veniam quidem aspernatur numquam. Voluptatibus asperiores excepturi. Sunt aut magni at enim modi sit provident unde animi.",
          id: "6",
        },
        {
          createdAt: "2021-07-24T22:28:05.664Z",
          author: "Glen Vandervort",
          avatar: "https://cdn.fakercloud.com/avatars/carlosm_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Placeat qui et.",
          content:
            "Incidunt quaerat iure nihil ut ipsam. Rerum ut quae mollitia aut dolor nobis non natus. Qui maxime fuga magni. Magnam cumque voluptas asperiores dolore. Quia deserunt error autem ex. Commodi veritatis ut sit.\n \rDolor quod dolor et est sit ut quae doloremque quasi. Porro impedit cumque quasi aspernatur. Veniam quo placeat iste nihil aut a omnis. Odit distinctio eligendi labore. Optio rerum adipisci. Temporibus culpa delectus quod unde quos enim nihil error.\n \rAt deleniti consequuntur omnis esse. Eos voluptatem dolorum reiciendis. Qui facere repellat. Voluptatem incidunt aperiam quas culpa.",
          id: "7",
        },
        {
          createdAt: "2021-07-24T23:04:29.995Z",
          author: "Eric Gutkowski",
          avatar: "https://cdn.fakercloud.com/avatars/jmillspaysbills_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title:
            "Perferendis doloremque quod voluptatum distinctio quo asperiores et adipisci.",
          content:
            "A voluptas a provident eveniet dolorum aut nostrum sunt. Ullam architecto ut qui eum harum. Delectus voluptate aut et ad sed tempora enim eum. Non et tenetur quo. Est aut minima provident ut provident aliquid. Rerum error ut eos rem est quia voluptas error.\n \rAut eaque harum rerum similique quasi voluptatem non. Dolor ut magni. Quasi fugit enim nulla voluptatem doloremque enim. Laudantium eius non repellendus veritatis quia autem iure adipisci quibusdam. Quis veniam possimus vero et eius quae. Necessitatibus natus quia quia debitis recusandae harum amet.\n \rTotam itaque nihil nisi ea fugiat ullam iste quis. Illo ut consectetur et amet. Et numquam aut. Quis tempore porro nobis. Architecto aut ipsa blanditiis explicabo beatae dolores debitis.",
          id: "8",
        },
        {
          createdAt: "2021-07-25T06:49:27.965Z",
          author: "Ervin Swift I",
          avatar: "https://cdn.fakercloud.com/avatars/nemanjaivanovic_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title:
            "Ullam quo placeat sed nemo labore maiores consequatur excepturi.",
          content:
            "Doloribus dolorem quia ad quidem quis dolor ex. Non quia aut. Voluptas natus est sit qui laudantium doloribus. Quia occaecati impedit dolor numquam inventore qui nobis. Repellat unde culpa ut non. Perferendis esse aut rem nihil hic dolorum omnis eaque est.\n \rEaque sequi incidunt debitis minima explicabo qui nulla error. Officia ut ullam eum et aperiam perspiciatis ut dolores dolor. Magni est qui facere molestiae. Necessitatibus assumenda voluptate. A facilis sunt. Delectus qui est ipsum earum modi debitis.\n \rTempore veniam sit quis aut accusantium minus minima ea quod. Aut velit quae nesciunt rem ea ad dolore suscipit nisi. Alias est esse exercitationem ipsam et.",
          id: "9",
        },
        {
          createdAt: "2021-07-25T08:58:58.778Z",
          author: "Kristina Koepp",
          avatar: "https://cdn.fakercloud.com/avatars/iqonicd_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Cum quaerat aut laboriosam assumenda.",
          content:
            "Ullam qui qui et quo voluptas nostrum consequatur dolor qui. Eveniet maxime porro aut et nihil debitis qui non. Modi sint totam cumque illo eos reprehenderit dolore. Harum sint culpa sint. Dolores id ab id amet assumenda. Omnis amet occaecati quidem debitis at autem explicabo quia.\n \rSed ipsum numquam eum ut nemo necessitatibus consequatur praesentium. Doloribus ut sequi. Maiores pariatur soluta qui labore.\n \rQuaerat aut dignissimos voluptatum quod et. Nihil est aliquid beatae ex dolorem aut aliquid. Laboriosam sed quis et error. Quo voluptates repellendus temporibus laborum esse magni omnis illum.",
          id: "10",
        },
        {
          createdAt: "2021-07-25T00:45:11.934Z",
          author: "Norman Jerde I",
          avatar: "https://cdn.fakercloud.com/avatars/fiterik_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Ipsum natus asperiores sit odio.",
          content:
            "Quo sit minus atque eveniet tempore odio in rerum provident. Qui voluptate quia. Quod consequatur non non consequatur doloribus recusandae voluptas. Aut ab qui doloremque et enim dolore perferendis. Vel adipisci hic delectus quis. Temporibus inventore commodi dolor voluptas suscipit minima eaque explicabo.\n \rEx dolorem ea. Qui voluptates corporis optio maiores quis. Et dolor est aut ratione voluptas. Repellendus vero fuga non.\n \rInventore molestiae est. Eum aperiam maxime explicabo nihil magnam commodi. Occaecati id magnam ullam sunt veritatis quidem eaque.",
          id: "11",
        },
        {
          createdAt: "2021-07-25T07:03:56.247Z",
          author: "Tyrone Hoeger Jr.",
          avatar: "https://cdn.fakercloud.com/avatars/russell_baylis_128.jpg",
          thumbnail: "http://placeimg.com/640/480/nature",
          title: "Voluptatibus consequatur dolor harum qui.",
          content:
            "Repellendus omnis aut consectetur molestiae deleniti minus rem. Laboriosam sed sit itaque tempora dolorum cum ipsum quas. Fugit laborum eum et non accusantium et eum. Quis delectus architecto sint et rerum est. Sit similique voluptas recusandae ad. Dignissimos consequatur nostrum totam tempora quae ipsum ut.\n \rVoluptatum mollitia ratione ipsam qui. Maiores eum odit architecto magni quasi. Consequatur rem laboriosam voluptatum aut enim dolor molestiae unde. Animi provident minima soluta unde eveniet accusantium. Molestiae sunt asperiores eaque natus quas reiciendis eum esse.\n \rUt illum et sapiente aliquam molestiae. Aspernatur repudiandae ad eum perferendis reprehenderit temporibus soluta. Praesentium tempore sunt voluptate error optio minus ducimus qui aut.",
          id: "12",
        },
      ]
export default {
  name: "Blogs",
  data() {
    return {
      blogs: blogs,
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
    }
  },
  mounted() {
    this.paginate(this.perPage, 0);
  }
};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
.container {
  text-align: center;
  .blogs {
    width: 70%;
    margin: 50px auto;
    border-top: 2px solid $black;
  }
  h1 {
    padding: 10px;
    margin: 0 auto;
    width: 80%;
    font-size: 3rem;
    font-weight: bold;
  }
  .mainPic {
    margin: 70px 0px;
  }
}
.blogs h3 {
  font-size: 2.5rem;
  font-weight: bold;
  transform: translate(0px, 50px);
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  p {
    width: 80%;
    margin: 0 auto;
    padding: 5px;
    font-size: 1.2rem;
    font-weight: bold;
  }
}
.blogContent {
  img {
    width: 400px;
    height: 200px;
    margin: 70px 0px 10px 0px;
  }
}


</style>