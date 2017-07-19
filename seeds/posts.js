exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        knex('posts').insert({post_id: 10001, user_id: 99901, title: 'life', content: "post text a "}),
        knex('posts').insert({post_id: 10002, user_id: 99901, title: 'bugs are cool', content: "post text b"}),
        knex('posts').insert({post_id: 10003, user_id: 99901, title: 'life sucks', content: "post text c"}),
        knex('posts').insert({post_id: 10004, user_id: 99906, title: 'hello world', content: "post text d"}),
        knex('posts').insert({post_id: 10005, user_id: 99906, title: 'things', content: "post text r"}),
        knex('posts').insert({post_id: 10006, user_id: 99906, title: 'hmmmm', content: "post text grr"}),
      ]);
    });
};
