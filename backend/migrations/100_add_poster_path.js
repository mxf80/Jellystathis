exports.up = async function (knex) {
  try {
    const hasColumn = await knex.schema.hasColumn("jf_library_items", "PosterPath");

    if (!hasColumn) {
      await knex.schema.table("jf_library_items", function (table) {
        table.text("PosterPath");
      });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.down = async function (knex) {
  try {
    const hasColumn = await knex.schema.hasColumn("jf_library_items", "PosterPath");

    if (hasColumn) {
      await knex.schema.table("jf_library_items", function (table) {
        table.dropColumn("PosterPath");
      });
    }
  } catch (error) {
    console.error(error);
  }
};
