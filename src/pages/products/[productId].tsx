import { ImageSlider } from "@/components/common";
import { getSingleProduct } from "@/services/productService";
import { Product } from "@/types";
import discountCalculator from "@/utils/discountCalculator";
import priceFormatter from "@/utils/priceFormatter";
import {
  Badge,
  Button,
  Group,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

type Props = {
  product: Product;
};

const ProductDetails: NextPage<Props> = ({ product }) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Head>
        <title>{product?.title || "Product Details"}</title>
      </Head>
      <SimpleGrid
        cols={2}
        spacing={30}
        breakpoints={[
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
        ]}
      >
        <Stack>
          <ImageSlider images={product.images as string[]} auto />
        </Stack>
        <Stack align={"flex-start"}>
          <Title order={matches ? 4 : 2}>{product?.title}</Title>
          <Badge variant="filled" size={matches ? "sm" : "md"}>
            {product?.brand}
          </Badge>
          <Badge variant="dot" size={matches ? "sm" : "md"}>
            {product?.category}
          </Badge>
          <Text>{product?.description}</Text>
          <Group my="xs">
            <Text color={theme.colors.gray[8]} weight={700}>
              {priceFormatter(
                discountCalculator(
                  product.price ?? 0,
                  product.discountPercentage ?? 0
                )
              )}
            </Text>
            <Text color={theme.colors.gray[7]} weight={600} strikethrough>
              {priceFormatter(product?.price ?? 0)}
            </Text>
          </Group>
          <Tooltip
            label={product.rating?.toFixed(1)}
            position="bottom-end"
            offset={10}
            transition="pop"
            transitionDuration={200}
          >
            <Rating value={product.rating} readOnly fractions={3} />
          </Tooltip>
          <Button mt="auto" ml="auto" variant="outline">
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default ProductDetails;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const productId = params?.productId;
  if (!productId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const product = await getSingleProduct(+productId);

  return {
    props: {
      product,
    },
  };
};
