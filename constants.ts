import { Game, User, Review } from './types';

export const games: Game[] = [
  {
    id: 'cybernetic-horizon',
    title: 'Cybernetic Horizon',
    price: 'Pre-order',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjPdVB3e7A5EgBz5uRzRdhFXOaInZyBMGekAzr02KPmol41jI1KGhkK-btLddQXfrJZ31HhNTlb0wdN-8I_WFaeL4f_twl5wNA97c65NJHNIf-lIU-OWaHvI7M5ZpPJXk5AQ7RGgFWAzwOpJQyOb53dOrN-lLfu9UgUEQ26rHsVA0rxewRGoF7oDU5oQgWN-4foPu2uQv6rdDxbeH_L8Pp3Vi7zi-AGJ-Hcqfut7hT46e-A1Nn8yCJHvotLYuyeic_h94AhhPu2Og',
    isFeatured: true,
    developer: 'FutureSoft',
    description: 'Experience the next generation of open-world adventure.',
    by: 'FutureSoft',
  },
  {
    id: 'stellar-odyssey',
    title: 'Stellar Odyssey',
    price: 'Free to Play',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3pgunxVLUo9pnz0lTwR9XydNtwAk3wdmStepojWck1rx8pB12kz4UlCofnSKOo_K60ItynazIbLZjAUPIIVlMqtcdkMW4D-liKvSHaSTPNwDvk4hXLtxiWaLW_Y0yI1Z88jAT21sphoX9UBlNBQ_hFmK_cOvlCdqOIY_YQ3O8hFcUc82JEXa1N_xUJ6aNRQzTQ41KQ0IH5d0RcFtiuOpgyJbj23myxLKdn-TOQ3iwwEd1de_ILkTIUQog1j4VXkvOZl-xkcLneWQ',
    isFeatured: true,
    developer: 'CosmoDream',
    by: 'CosmoDream',
    ratingFraction: 4.1
  },
  {
    id: 'forgotten-realms',
    title: 'Forgotten Realms',
    price: '$49.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsumeJC-b62dIBVQ4GKtZhY7YQrpfMj-t5TzTEcfm7eNvFfWb7588NcErstVfdXvJt0wonyvIvRgwkoxsDVcYqDgP_IG4Hgqg_dcdykB25TlUgPcCno8a9XCXTYMR0Ngh6mrIcdCHiku2fQB4Geyv3YLtmGlU43HXg4nJj9hNj6A1R8Q8HP9F_qu7JSM_-_P0AbqPeXNJCZw4DEYTop1xLg87E_CHLzovMNtSFD0NhDwiETgzayBFGjterW_VvWlmWsCz_msgOabc',
    isFeatured: true,
    developer: 'Old World Forge',
    by: 'Old World Forge',
    isLiked: true,
    ratingFraction: 4.8
  },
  {
    id: 'speed-demons-4',
    title: 'Speed Demons 4',
    price: '$59.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAslr8sUnZopuiav_w1Xrr3PX3gwFk4QKxHgrR1h5rQsEUdbKUrEKvdTtWKAQLjgMMqmWu9yIR4d0NJznlIWdTMVzJvroI4wsq0Fw-2-PtEr7ghDLGJdGLf-vf8idr0mvDk7dbMIeIOuRvBGTJt1sZysPazfgM88zJKNKVYnqT4OmBLxBJROr1biH08SgpThwRTYR9efT3PPqIsZIdPi7Zzrp0C0okN90urULNBSp3P5zXs22VOyTxJNGEz4yPT6PpJHCAXJskY5LU',
    isFeatured: true,
    developer: 'Velocity Interactive',
    by: 'Velocity Interactive',
    ratingFraction: 4.6,
  },
  {
    id: 'kingdoms-of-lore',
    title: 'Kingdoms of Lore',
    price: 'Free to Play',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPRHKVWo6cPrujhNVBrNEk6aW-LxNBeS84oODhdO0MRl4spAZDykNpJxbAjnLfT4Z4PWlJE-i6qERQTGeW3oToDuuC4UCOzBYl23QiSEzKyEc3EAJgHciyQPdIpIbR78NC-LbZ0F1xJ9lzjtSuwvH_FI2vutp-fIBxI7_EiJ1Ft2LqJVlYs9PR6nvzY3pWJPw9-a7rzlXmaZ8JUikz-2L-_3-ZCTKEAofTCKE2T2xpiRMeAwuQH7GYDSIg2GvTlB_y_Cdh7oOVXTo',
    isFeatured: true,
    developer: 'NatureSoft',
    by: 'NatureSoft',
    ratingFraction: 4.0
  },
  {
    id: 'pixel-paladins',
    title: 'Pixel Paladins',
    price: '$19.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj35gDD2n8L_WiS0m2xJibHdtEjb9AYGlca6pKcsKcnSgii54zm2x8tLCPintQj7LPiYt4kjm4-9Xxc5IRyPOIfSVd3RUqoKceJhDV7gNzloMdyjMQyaa1OFau7ww1bi3XPJJFoMUsQK1e1FTUmo5FkNkYbywgKGdJiKSOEWTuZeGGgnbRPp8vQ6G5WHNAqA8LUf6FJQbTJXQiMFHCGbPbhgO4xH48Pctpcd5fTyUd5xyEWtGKbJ6u-3V8ck6vP6ctx6bj0_QTx-I',
    isFeatured: true,
    developer: 'RetroHeart',
    by: 'RetroHeart',
    isLiked: true,
    ratingFraction: 4.9
  },
  {
    id: 'astro-ascent',
    title: 'Astro Ascent',
    price: '$29.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfPoqERWqgh7wEFHnE4R7Fgc3ukHTTkGEbYzp1pXygazQOcw_KDb9qAVIGcOPR5-7PLA92bk82BV7URf7EF3MvJrtJVat28JSPkW9wDk8f3CCmEPDauQYx5PdJGumzMTqa8YXaoLiBebA1r6fbkmFPH1iXk7pjp21WTvPDGXNJ-rxZm_nEAzYmjYHuqdEw7TcYiPRdV2EHRJQMPeqjJpMjzVxMHSdjkgYSJmAG1ohT_0YF8MX3iBSOsj5QIAdwvoldL8oIWSu201E',
    isFeatured: true,
    developer: 'Galaxy Studios',
    by: 'Galaxy Studios',
    ratingFraction: 4.2
  },
  {
    id: 'echoes-of-war',
    title: 'Echoes of War',
    price: '$69.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByQXOXYC08Y5Uzf-7BxpFF31ZeeBDoXRYX1fbmad93QsPU33Kk-GilSqLVXaDpINgxO-3IxehxVfBRN8BCBoRZ4LbOvqAqjZokCm1b8b2d33Un_HgIYfPkZfmvAgxOEMw4cX0Zd-NuvLpZAMESV1ojVCLUkWRgdL_TMJ0TM0gJZfhGx-9JXLtf-ZtrFmn1kfjFX9IQhovOh0GFRyfIEpbI09W9x9pomhnnHTJcFoWW79qEk33O52LOw7pQnB83Qt4IK85E6vEveIg',
    isTrending: true,
    developer: 'Warfront Studios',
    by: 'Warfront Studios',
    ratingFraction: 4.1,
  },
  {
    id: 'neon-drift',
    title: 'Neon Drift',
    price: '$39.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC50luf9A3SlObxgyE2aTkYEa-Vftm1-QckAGN69_fb7i5-B59nJTnbQDZC2Ti70RPUQEI3XNicEPjSUDoVlBQy5hsD93uzC1H2NLuupHVBmpEKb0z0OYx_AiRPTNMvqBMjnTv93U0akBlSuaApSL7vLSZamOHsyOAcT1bLLTFKXHYzK_7Gapj5taJlctobAiauxGetKNYjcB6z-jDyKEvRpBOl8In4skDZ5-sJcZhmJGMwMVFyilYcNw_fHoS6xZdOUC4U_-n3Wx0',
    isTrending: true,
    developer: 'Neo Future',
    by: 'Neo Future',
    ratingFraction: 4.8,
  },
  {
    id: 'the-last-stand',
    title: 'The Last Stand',
    price: 'Free to Play',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjwHcJhHYStfz_VUs3GtE4pxmLPhSS_po0jhyDsdA3Ed5KvTBc0H5qf1qdToscUwMlxbuxXUXr52CkztyZ1V0DoAyp7_5z6KFuKaUk8ktyU7OrrgfXRx930ciGDDiRYWCRTnKl2SytX78dIY9THlqEmaGp-4ow2r49SlFYUXERiDSMFzVW-gNaDEiFT7f_zvDQ_tYR7i2OZ-k7DvbpVAbbj8gpIBMlaD29jsTnMhCqBNzKndT1jnUB5o3h7ZbvNA42_udm9xos9mA',
    isTrending: true,
    developer: 'Survival Instinct',
    by: 'Survival Instinct',
    ratingFraction: 4.0,
  },
  {
    id: 'chrono-break',
    title: 'Chrono Break',
    price: '$59.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO-GQVVLrvx50GD8QAxwY_JiyMr_ogH0x96lpEZ39S_zRsRsVbScl6uOC1IXkiivIimLeKGfzo7o_L2KBBdFcNYRiWNo1qt2jbQGj96kQpDXsgZkwQTHBHZI_dzOi5KTjz23y7w9ws5qbfgpBZUMKDTubXOqBIyQ11HePSpHRQG2HXnzuXjImk1oYMRXX5T9KI9Hm5YSUfJG7Kgit6uginV2iDxtNwPKyyd8osN96fce-Z7rsUN7hkljoNV1MZMF7f0Np0S2NgCkk',
    isTrending: true,
    developer: 'Time Warp',
    by: 'Time Warp',
    ratingFraction: 4.2
  },
   {
    id: 'mystic-grove',
    title: 'Mystic Grove',
    price: '$14.99',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9j53am-rwg__tKf09bm76-KjWqJ_xpjsgqYY7yQ1RdnRv_fJRmEJxiIAKhgn4nnWHA8Lbb9t9MWVmNU98zyLEZMMOYmf_dKtxlhIETtpdxj4xYOwGwL4jURJzH8wdrQKMiPufGrSW1Kdc4lC9SWNOTfpl7Z1Qns9IDybKaPpz3CKOQTRQmdof9ex_AXH3iIYKjIPQqsoHzQjes_vzC_oyxeiqmWgkfiLnQtAtb887WclvWTwHOPGbyfNkr4nC32rlufdv7kBbtyw',
    isTrending: true,
    developer: 'Enchanted Forge',
    by: 'Enchanted Forge',
    ratingFraction: 4.9
  },
  {
    id: 'galactic-rift',
    title: 'Galactic Rift',
    price: 'Free to Play',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRzYvLHd2TSmrYlQCn0jd3b5Dpuardy_XKhyL18Pj1IF4WIZZAXzCZMtxpyAp0gZCkuRCftBTqpAuiqBOnTKI42dG5ly5dUV9ZAs-t9AquCNXWLZQ95NrucvcsJOCc-ITVBzuV9tJ7_ots8W8UUWeiwK432jdbvw_0NWNywpo0d3Nh0Wbij4yrY60EM8Xj0ExAGiopLQFfT7Dg5BPasxXUDplFBHiqcUUzUl8-zAS6LlZ9se1UNSA4X4D9AmOKHhBUtZlj0E-C8zY',
    isTrending: true,
    developer: 'Astro Devs',
    by: 'Astro Devs',
    ratingFraction: 4.6
  },
];

export const detailedGame: Game = {
    id: 'cyberpunk-odyssey',
    title: 'Cyberpunk Odyssey',
    price: '$59.99',
    imageUrl: 'https://example.com/cyberpunk.jpg',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    releaseDate: 'Oct 10, 2024',
    rating: 4.8,
    reviewCount: 12450,
    tags: ['Action', 'RPG', 'Open World'],
    longDescription: {
        intro: "Cyberpunk Odyssey throws you into the neon-drenched streets of Neo-Kyoto in 2242, a sprawling metropolis where mega-corporations rule and cybernetic enhancements are the key to survival. As a freelance netrunner haunted by a fractured past, you'll navigate a world of corporate espionage, rogue AIs, and underground revolutions. Your choices matter, shaping the story and the fate of the city itself.",
        features: "Featuring a vast, seamless open world, deep character customization with unique cybernetic abilities, and a branching narrative with multiple endings, Cyberpunk Odyssey offers unparalleled freedom. Wield high-tech weaponry, hack into corporate mainframes, and forge alliances in a city that never sleeps. The future is yours to define.",
        details: "Explore diverse districts, from the glittering skyscrapers of the corporate plaza to the grimy, dangerous underbelly of the black markets. Engage in fluid, fast-paced combat that blends gunplay, melee, and powerful hacking skills. The world reacts to your every action, creating a dynamic and immersive experience where your reputation precedes you.",
    },
    trailerImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaKC3thZjMLVD4YW1-WFHTM0UIUaPFUXELBX7UtugQRi4kavh5NsZSvDxDnLiOapoFas8xS623h_SVgqvhk5kUr1szREnpIjLSjj-n2yHyfLrRvArdfsh1hImasKClZcj1IpD__JO7KeGkklFuAzPCw6snhfSK0S6tbkwOgyv1b0DFP9tIuynkn-6cJZ8YhZFtZZHWWUTKU3WCzkeGY9_KtRv0oLc3beBK9Zfq0EHyUbN5t_2glnIw-dazT1QjElMw-3DMQ6GxrSU',
    media: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ1YLpQmI5hDU9Vktj0QpEeP4zK9rwPw4at41925oHn0LqXRyS2Jzw3iWChFoJHdl2CbzfMbiCrRxWDyRmMHosA8uJm_oIPsCqfugEa8adMl7uLwexQevTgloayfsfF9mbGSM30tJYbV4870KM6E0kte5oLFLsuIhTYk6qS7iPas8NfJrOWq3jtA40Lkay51wXeEMzzpZhd_3Tb0jWppMz6Rh-ubwX2RrKww8urNCF1D1nSI7B0ln6mzo7a7aC1OYVLhbLyeSiVJE',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB_JpnWSf0nqBSmBBGVAggnGWcf2FeqWR_AJj4VVDTqww3r7a96HGwKbTw0xNJqXePJM7l5oxxSsnQ51rg_RvCBdS25Ugtq_BArluUxlCGa3dlfwmbI251MkN8m6LSYgoruh5gF_7HokNj9-cI7mk2J0p-KP3ZgE2TaXpLsLfoAQkIb1KGyYTH1SQb-WmxSb9Mvi2O2lgXT1ZbiFkaKbdR8EbMxoPoKy_t8wl-0-1qdPue7RGuku8VAi00g-IYE5qf4fQooJ1I2OYU',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDPcU9l-G4hJM_OsceLiBfaM_tyDYbCYS5CacuTmng38BR7lhS8eJI5LRE10JIyFqhpz9laNlt6CwnQVjZiipepyftO3GQ2gxfRqWUXyIukwcsqVz7HleYajkXF1DO42MEUX_H1vg9YojEGY6FIGk5zDOkXQlMob_Vmp54DZWjFUERnQn3Q2QYsMOElXtrSKTATEe17EcBSR2su0EhxlGz5ZTrYuUTDzUHrbfD1KyCiCOhfu1e9Reg_1XjCHTLIh2Nu8lOKyLPPq5A',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBK3H_i2zPa_ErNNu1T-y4H69NgY3_zBaeNRVE6DUYhJUaboTaVIybMst8b_oItj3WAnGjSXRFSyqhx0i75d3KLeKI0S9SSszB08zHXeRGH9IDTwgKSoDkNm7TKJuXTkkTH70HJ_BGY-4nQuscwDSYExXPwWLffHBvKLy94JRGyftigUc8oU9IjSXmtAArJr9608vsjwDOxL6PL-U_fLm7K7NPal4714FJv6XIbVxV0zWLzz_8GKWB5nVaZeA3pp-CEAPpObJ4Zgmk',
    ],
    platforms: ['windows', 'mac'],
    by: 'CD Projekt Red',
};

export const reviews: Review[] = [
    {
        author: 'Alex Johnson',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyQ1ziVd6aX5MsegmuDvzVVBsDZXJlhxRdtaFDt3vPkTLhx6wCt7xsDDOcom2Rd7cG5F2uOuifdIWCjCcI9qGQp0pyXOjPtTAX404ngNHfIYHt5DvzUYlsEi28UHEvQvcznK5-3ghGwdVomZJUmBQ35FMmkSZ9OhwEaB6IWUMDTkMKrwdJvvQmiq-NoqNH13jiQiWu68rU7ZfIVqXSlsef0NVLSgVCyDYSrFnAeZDbJIrhOr04oShyt4Ikl9NRONuWZvCkHtJiems',
        rating: 5,
        comment: "An absolute masterpiece. The world is breathtakingly detailed, and the story kept me hooked for over 100 hours. A must-play for any RPG fan."
    },
    {
        author: 'Samantha Chen',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIUXvFLZz3gE3FKc0DMjlWYGDyjJrGiJ3G07PFLa-Bs8M87kIciWSm2NdjsmCJI9jo6cevYC66DDwnZo3LtfOScWqm2N2Oth7vTtgz0e6c3zQGYoJEdwrY0ppuKjBtIYRd0IABc7ig0uLDYHLODHXhgvWKkxnT232-oV-kmA5A0VBv_yIGTbWWIoSJdPLcPU89K5itwztbbCVjyzMDFIYYgYpoXKQAJjBFRUBqTiB6ZpMkMoU5WiyT5J72pAdltVsRQueMOtBi8_o',
        rating: 4,
        comment: "Great game with a few technical hiccups on launch, but the patches have fixed most of them. The atmosphere is incredible. Worth the price."
    },
    {
        author: 'Mike Rodriguez',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7stYy2ZKXcj1mSVJEk9_5tefXv4xd42V8WOu-eHjgnmPs7u1XEsptArmnFb-jbxvEOmtHQ5U5QKqVUyce_M5BMJlZKWIDSAhdZuNGN7YNg8PEZoTaK9W6LaZaksqD1zE8CGEZEGFc5VXhNPZ_kOa-PEUJ_Rk2Pve6XeHo48gAajysWhZtpB7xXOKMKLRr9E8ZnKtlOj38oRA9aeF2pmOQplmbXrm1ihYs2qoH3ZsrGNVSXgy49NtOWckV6hI_n181N_IocW8xt-c',
        rating: 4.5,
        comment: "The gameplay is slick, the customization is deep, and Neo-Kyoto is a joy to explore. Combat feels responsive and impactful. Highly recommend."
    }
];

export const user: User = {
    username: 'AlexD_23',
    email: 'alex.d@example.com',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9fR-4c6abafml980q_28mha0f9OYAxYEqIzbRPG7eLXOcygLuoW9RrkIdPHk5ULBAFYaFh9LSIhILQx4eUyBhtrhWQYYiJsnTylroaRol-McDDX69aShBEGOdFK6gqFZHDGH8_in2xiU2YgOxWmtfhHVaowO4rwOlzD4Ka9KlwdYFYy2rNUngq65q4qfDfThknOXGop05cY6E_oL53vR4fUYsLUV19Gsu5QUZHKdoPYPNMw2UBsDwiOGPiLOVpul4HFns8sLAh0g',
    memberSince: 'January 2023',
    bio: 'Explorer of digital worlds and champion of indie gems. Currently battling through the Forgotten Realms.',
    role: 'admin',
    library: [
        { id: 'cyber-odyssey', title: 'Cyber Odyssey', price: '$59.99', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcYk4TQD5lZLwIyoqarls5UGFt1ZSOm7TpuAXZcJGPBskFoA_dHctjwK8Ouht8L8nqHi_w5jwhvEnao_Y0lO77-13sI1yjTkvbrFCmRHDpTkXXVaaCF3uSAwBZugZ4kjEg7vL_OQa9EeZOX4r4ktKtqkBQ-E0Vt3DZAnjpXfDr23jIUxC8kmuHZ7Cpj_Ntf6H8PTIb7pCE5PyCs8lTbemcxklA84EfXSKEmjswDSKefwR9Eil3BB7_BQLFerFfZV_zlLS4GoeIKVg', developer: 'CD Projekt Red', by: 'CD Projekt Red' },
        { id: 'whispering-forest', title: 'Whispering Forest', price: 'Free to Play', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIY8O2ruPWnIh7-TGByuG2uA05Zf9p_P07zFJWVN8FGlDZtvtggvU8wQJYZtjk70v4Qe-x1qk7B5T_6xoI-aqVbQsd67PD98oIjAEkJfCTGRoKvPX-QnD4dFvx4ujrzwxmqF35owXgDc4jdh7VtsP9X0VRKeNn31VYQkOHQbawA2BxSy1YErtwEgQzS9H7dRMNlo8cmguOmDGPnWj-AVMuNbSbIvbx75FWtsSg1MrmnyrixgZCArHX-VlA0xqbT-Zx5ratU6FzHyk', developer: 'Enchanted Forge', by: 'Enchanted Forge' },
        { id: 'galaxy-warriors', title: 'Galaxy Warriors', price: '$39.99', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-LlthLNlgR7cFR30_6lxe2H3kFon5nAjKBn3c4fvVlJTuPfWydgQYCrhpmuTblP5DFNnElNfhvQhfTQGwXp6acalTSCIjwEW-vrpxpRiEzg4quzQTcI_1rph9EHxeguq0tsHAvlQMJ-42THX8s58ooAMGYjnEtUyTLF80aQq2iMHBZ82T8IieLP2lj5HVeBCWBUtGtW1JMKukoC2lypw_injZbZCl_cfeSwdGoE5l56hZ12ZIVAzacDnBELdvmxyr_LQaIEOSB4g', developer: 'CosmoDream', by: 'CosmoDream' },
        { id: 'legends-of-valor', title: 'Legends of Valor', price: '$49.99', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXVsZ2wnYFPlNrmHBKmMzVGi360cSiaJFBbMHi-nIGQblfl1EjdBJ8j_liaHeReI7sijuHO7eKgDVARNyDhnbAxMBoGFsOAIBJJf6Q7Wa5E2VypJtkSjeGbOq9jr90yD9_c2PjWEw88yfN5gJce63fjW2dSW90C2pjoYyubXIDC7xkJHEpCJyF0SebXmt9HUAdzhglGVVeW2Z_3UNjllSsG9tVmsAxpTHp9JPpq3yC_CYXnEOT3V4COmmoDNmYNeaG31jHqw8LBKw', developer: 'Old World Forge', by: 'Old World Forge' },
        { id: 'neon-racers', title: 'Neon Racers', price: '$29.99', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtQv96YmUiQ-AFM8D8BbwhPu7as-OIX_oeuRMha5RjigZtz57aiIqO3rMUZ201YEJm305wD3S0S1rUfqOd0RS0UrrG2nWJgRtL1-VWSJPXyi9JE7Qm9aH0g_kMoW63nWFyYqo4XKzH72Tpy1CP84WEm1d_56X7SfM8FAqoldAn2xBIKT3e6yn1-D_C9lVVzR5kvJwue_btoxi8vwoPSO7-yLXD0_DGS1EvCoOqpo0avxSjx0jvqDnhbIgBEGlNMirl-peJcEZWCE8', developer: 'Velocity Interactive', by: 'Velocity Interactive' },
    ]
};