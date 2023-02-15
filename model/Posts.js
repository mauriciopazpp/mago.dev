import { getAll } from '@/model/Index';

const tableName = 'posts';

const allPosts = () => getAll(tableName);

export { allPosts };
