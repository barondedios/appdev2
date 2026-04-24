export default function DetailsScreen({ route }: any) {
  const { name } = route.params;

  return (
    <Text>Hello {name}</Text>
  );
}